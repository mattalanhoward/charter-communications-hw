const express = require('express')
const customersData = require("./data/customersData")

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/customersdata', (req, res) => {
    res.json(customersData)
})


app.listen(5000, console.log("Server running on port 5000"))

