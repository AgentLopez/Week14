const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')
const formidable = require('formidable')
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()
const { createPool } = require('mysql')

var mysql = require('mysql');
const { response } = require('express')
var connection = mysql.createPool({
  // connecionLimit: 10,
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_KEY,
  database: process.env.SQL_DB
})


const stripe = require('stripe')('sk_test_51IlcevKnypfgt1Fw80MHmwFdiiQMx0x98xS2vLRiLTzDB7hW7U500MYNlddbUr2VCw6ulj2ARaRXpwGtCb5oxuGd00fTRth9Li')

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

  console.log('here')
  let thisOrder = { name: name, email: email, address: address, address2: address2, choice: choice, comments: comments, file: file }
 

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
    success_url: 'http://localhost:8000',
    cancel_url: 'http://localhost:8000',
  });


  connection.query('INSERT INTO orders SET ?', thisOrder, function (error, results, fields) {
    if(error) throw error
  })

  res.json({ id: session.id });


})

app.post('/upload', (req, res) => {
  new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
      uniqueFilename = `${uuidv4()}.${file.name.split('.').pop()}`
      file.path = __dirname + '/uploads/' + uniqueFilename
    })
    .on('file', (name, file) => {
      let url = `http://localhost:8000/uploads/${uniqueFilename}`

      res.json({ file: url })
    })
})

app.get('/test', (req, res) => {
  res.json({ test: 'working' })
})



app.listen(8000, () => {
  console.log('Send Picture and Pay . . . Please')
})