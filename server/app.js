const express = require('express')
const dotenv = require('dotenv')
const connection = require('./config/connection')
const BookRouter = require('./routes/BookRouter')
dotenv.config()
connection()
const app = express();
const port = process.env.PORT || 3001

app.use(express.json())
app.use('/books', BookRouter)
app.get('/', (req, res) => {
    res.send('Merhaba, harun!');
  });
  
  app.listen(port, () => {
    console.log(`Uygulama http://localhost:${port} adresinde çalışıyor`);
  });
  