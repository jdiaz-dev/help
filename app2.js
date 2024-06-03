const express = require('express')

const app = express()
app.get('/', (req, res) => res.send('<h1>Express with aws 2</h1>'))

const port = 4500
app.listen(port,(arg1, arg2) => {
    console.log(arg1)
    console.log(arg2)

})
console.log(`Server running on port ${port}`)