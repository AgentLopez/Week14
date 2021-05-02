const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')
const formidable = require('formidable')
const { v4: uuidv4 } = require('uuid')
const models = require('./models')
const bcrypt = require('bcryptjs')


require('dotenv').config()

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