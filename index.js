const express = require('express')
const categories = require('./Data/categories.json')
const news = require('./Data/news.json')



const cors = require('cors')
const app = express();
const port = 3000


app.get('/news', (req, res)=> {
  res.send(news)
})

app.get('/news/:id', (req, res)=>{
  const id = req.params.id; 
  console.log(id)
  const selectedNews= news.find(n => n._id === id) 
  res.send(selectedNews)
})



app.get('/', (req, res)=> {
  res.send('dragon is running on the pitch')
})
app.use(cors())
app.get('/categories', (req, res)=> {
  res.send(categories)
})


app.get('/categories/:id', (req, res)=> {
  const id = req.params.id;
  if(id == 0){
    res.send(news)
  }
  else{
    console.log(id)
    const newsCategory = news.filter(n => n.category_id === id)
    res.send(newsCategory)
  }
 
})


app.listen(port, ()=>{
  console.log(`dragon api is running on port : ${port}`)
})


