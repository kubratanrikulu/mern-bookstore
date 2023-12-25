const express = require('express')
const router = express.Router()

const BookController = require('../controllers/BookController')

router.get("/", BookController.getBook)
router.post("/", BookController.addBook)
module.exports = router