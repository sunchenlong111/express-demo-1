const express = require('express')
const app = express()
const port = 3000

app.get('/xxx', (request, response) => {
  response.send('你好123!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})