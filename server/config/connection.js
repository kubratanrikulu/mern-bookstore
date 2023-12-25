const mongoose = require('mongoose')

const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
    }catch(err) {
        console.log(err)
    }
}

module.exports = connection