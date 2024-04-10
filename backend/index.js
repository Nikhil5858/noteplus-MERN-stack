const connectMongo = require('./db');
connectMongo();
const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

app.use('/api/auth/signup',require('./routes/auth/signup'))
app.use('/api/auth/signin',require('./routes/auth/signin'))
app.use('/api/auth/getprofile',require('./routes/auth/getprofile'))
app.use('/api/notes/allnotes',require('./routes/notes/allnotes'))
app.use('/api/notes/addnotes',require('./routes/notes/addnotes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
