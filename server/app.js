const express = require('express');
const dotenv = require('dotenv');
const connection = require('./config/connection');
const BookRouter = require('./routes/BookRouter');
const cors = require('cors');

dotenv.config();
connection();

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/books', BookRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} adresinde çalışıyor`);
});
