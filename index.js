const express = require('express')
const categories = require('./Data/categories.json')
const cors = require('cors')
const app = express();
const port = 3000
app.get('/', (req, res)=> {
  res.send('dragon is running on the pitch')
})
app.use(cors())
app.get('/categories', (req, res)=> {
  res.send(categories)
})


app.listen(port, ()=>{
  console.log(`dragon api is running on port : ${port}`)
})


