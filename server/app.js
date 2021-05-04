const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')
const formidable = require('formidable')
const { v4: uuidv4 } = require('uuid')
const models = require('./models')
const bcrypt = require('bcryptjs')
var nodemailer = require('nodemailer')
const authen = require('./auth')
const { sequelize } = require('./models')
require('dotenv').config()

async function main(message) {

var transporter = nodemailer.createTransport({
  host: "smtp.dreamhost.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASS
  }
})

let info = await transporter.sendMail(message)

}




const stripe = require('stripe')(process.env.STRIPE_LIVE)

app.use('/uploads', express.static('uploads'))

app.use(express.json())
app.use(cors())

app.post('/order', async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const address = req.body.address
  const address2 = req.body.address2
  const choice = req.body.choice
  const comments = req.body.comments
  const file = req.body.file

  
  let newCard = models.Card.build({
    name: name,
    email: email,
    address: address,
    address2: address2,
    choice: choice,
    comments: comments,
    file: file,
  }) 

  newCard.save()

  if (choice === 'four' || choice === 'one' || choice === 'five') {
    models.Supply.update({
      hor: sequelize.literal('hor - 1')
    }, {
      where: {
        id: 1
      }
    })
  } else {
    models.Supply.update({
      ver: sequelize.literal('ver - 1')
    }, {
      where: {
        id: 1
      }
    })
  }



  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Imperfect Print - Covid Card',
          },
          unit_amount: 500,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://imperfectprint.com/thankyou',
    cancel_url: 'https://imperfectprint.com/oops',
  });


  res.json({ id: session.id });


})



app.get('/admin', authen, (req, res) => {
  models.Card.findAll({
    order: [
      ['id', 'DESC']
    ]
  })
  .then(orders => {
    res.json(orders)
  })
})


app.get('/shipped/:id', authen, (req, res) => {
  let id = req.params.id
  let email = id.split(' ')[1]
  

  models.Card.update({
    shipped: true,
    shipdate: Date.now()
  }, {
    where: {
      id: id
    }
  })
  .then((response) => {
    let message = {
      from: '"Imperfect Print" <order@imperfectprint.com>',
      to: `${email}`,
      subject: "Your Order Is Being Shipped",
      text: "Thank you for your order, it's printed and in an envelope and will be at the post office in the next 24 hours.",
      
    }
    main(message).catch(console.error)
    res.json({success: true})
  })
})



app.get('/paid/:id', authen, (req, res) => {
  let id = req.params.id
  console.log(id)
  //add authentication middleware
  models.Card.update({
    paid: true,
  }, {
    where: {
      id: id
    }
  })
  .then((response) => {
    res.json({success: true})
  })
})



app.get('/stock', (req, res) => {
models.Supply.findOne({
  where: {
    id: 1
  }
})
.then((supply) => {
  res.json(supply)
})
})


app.post('/stock', authen, (req, res) => {
  let hor = req.body.hor
  let ver = req.body.ver
  let blank = req.body.blank
  let key = req.body.key

  models.Supply.update({
    hor: hor,
    ver: ver,
  }, {
    where: {
      id: 1
    }
  })
  .then((saved) => {
    res.json({success: true, message: saved})
  })
})

app.post('/login', (req, res) => {
  let username = req.body.username
  let password = req.body.password

  models.Boss.findOne({
    where: {
      userName: username
    }
  })
  .then((user) => {
    bcrypt.compare(password, user.password, function (error, result) {
      if(result) {
        var token = jwt.sign({ username: username }, 'PRINTERBROKE')
        res.json({ success: true, token: token})
      } else {
        res.json({message: "Wrong Something"})
      }
    })
  })


})

// app.post('/register', (req, res) => {
//   let username = req.body.username
//   let password = req.body.password

//   bcrypt.genSalt(10, function (error, salt) {
//     bcrypt.hash(password, salt, function (error, hash) {
//         if (!error) {
//             let newUser = models.Boss.build({
//                 username: username,
//                 password: hash
//             })
//             newUser.save().then(saved => {
//                 res.json({ success: true })
//             })
//         }
//     })
// })
  
// })

app.post('/upload', (req, res) => {
  new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
      uniqueFilename = `${uuidv4()}.${file.name.split('.').pop()}`
      file.path = __dirname + '/uploads/' + uniqueFilename
    })
    .on('file', (name, file) => {
      let url = `https://api.imperfectprint.com/uploads/${uniqueFilename}`

      res.json({ file: url })
    })
})

app.get('/test', (req, res) => {
  res.json({ test: 'working' })
})



app.listen(8000, () => {
  console.log('Send Picture and Pay . . . Please')
})