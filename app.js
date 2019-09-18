const express = require('express')
const app = express()
const router = express.Router()
const data = require('./data.json')




const port = 8000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})