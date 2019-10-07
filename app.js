const express = require('express')
const app = express()
const router = express.Router()
const data = require('./data')

// app.get('/api/account', (req, res) => {
//     res.send('Hello World!')
// })

// app.post('/api/account', (req, res) => {
//     res.send('HTTP POST setup done!')
// })

app.all('/api/account', (req, res, next) => {
    res.send(`${req.method} setup done!`)
})

app.route('./api/account')
    .get((req, res) => {
        res.send('GET')
    })
    .post((req, res) => {
        res.send('POST')
    })


router.get('/account', (req, res) => res.send(data))

app.use('/api', router)

app.use('/images', express.static('images'))

router.get('/account', (req, res) => {
    console.log(req.query)

    return res.send(data)
})


router.get('/account/:id', (req, res) => {
    const id = +req.params.id

    const account = data.filter(d => d.id == id)
    console.log(req.params)
    return res.send(account)
})


const port = 8080

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})