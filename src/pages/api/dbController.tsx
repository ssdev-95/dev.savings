import Mongoose from 'mongoose'

const uri = process.env.MONGO_URI

const DBConnect = async () => {
    if(Mongoose.connection.readyState>=1) return
    return Mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
}

export default DBConnect