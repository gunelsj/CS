const express = require('express')
const bodyParser = require('body-parser')
require("colors")

const app = express()
app.user(bodyParser.json())

const sqlDB = [
    {
        id: 1,
        username: "Gunel"
    },
    {
        id: 2,
        username: "Gunel"
    },
    {
        id: 3,
        username: "Gunel"
    }
]

app.get('/', (_req, res) => {
    res.send(sqlDB)
})

app.get('id', (_req, res) => {
    const {id} = req.params
    const user = user.find((item) => item.id == id)
    if (user) {
        res.status(200).json(user)
     } else {
        res.status(404).json("User not found with the given Id !!!")
     }
})

app.post('/', (req, res) => {
    const userBody = req.body
    users.push(userBody)
    res.status(201).json('User has been created successufly!')
})

const PORT = 5000
app.listen((PORT), () => console.log(`Server is running: http://localhost:${PORT}`.bold.green))