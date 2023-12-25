const Book = require('../model/BookModel')

module.exports.getBook = async (req, res) => {
    try {
        const books = await Book.find({})
        if(!books) {
            return res.status(404).json({
                success: false,
                errorMessage: "Books not found!"
            })
        }
        return res.status(200).json({
            success: true,
            data: books
        })
    } catch (err) {
        return res.status(500).json ({
            success: false,
            errorMessage: err
        })
    }
}
module.exports.addBook = async (req, res) => {
    try {
    const book = req.body
    if(!book) {
        return res.status(500).json ({
            success: false,
            errorMessage: "Something went wrong!"
        })
    }
    const newBook = new Book(book)
    const isBookCreated = newBook.save()
    if(!isBookCreated){
        return res.status(500).json ({
            success: false,
            errorMessage: "Something went wrong!"
        })
    }
    return res.status(201).json({
        success:true,
        data: newBook
    })
    }catch (err) {
        return res.status(500).json ({
            success: false,
            errorMessage: err
        })
    }
}