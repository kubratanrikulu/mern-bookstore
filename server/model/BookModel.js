const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 100
    },
    posterPath: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 100
    },
    pageCount: {
        type: Number,
        require: true
    },
    summary: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 500
    },
    category: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 30
    },
    language: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 30
    },
    printingHouse: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 30
    }
})

module.exports = mongoose.model('Book', BookSchema)