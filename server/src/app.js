console.log('Running on 8081')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)

app.get('/status', (req, res) => {
  res.send({
    message: 'helo world'
  })
})
