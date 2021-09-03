require('dotenv').config()
const User = require('./api/users-model')

const express = require('express');
const cors = require('cors');

console.log(process.env.PORT)
console.log(process.env.API_SECRET)

const PORT = process.env.PORT || 5000 // fallback is nice

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
  res.send(`<h1>UNIT 4 Today's Project</h1>`)
})

server.get('/api/users', (req, res) => {
    User.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: err.message})
    })
})

server.post('/api/register', (req, res) => {
    const newUser = req.body
    User.insert(newUser)
    .then(user => {
        if(!user.username || !user.password){
        res.status(400).json({message: 'Please provide username and password'})
        } else {
           res.status(200).json(user)
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: err.message})
    })
})

server.post('/api/login', (req, res) => {
    const userL = req.body
    if(userL.username && userL.password) {
       User.insert(userL)
       .then(user => {
        res.status(200).json({message: `welcome ${user.username}`})
       })
       } else {
           res.status(404).json({message: "Authentication failed"})
       }
       
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})