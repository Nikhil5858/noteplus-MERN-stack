const connectMongo = require('./db');
connectMongo();
const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

app.use('/api/auth/signup',require('./routes/auth/signup'))
app.use('/api/auth/signin',require('./routes/auth/signin'))
app.use('/api/notes',require('./routes/notes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
