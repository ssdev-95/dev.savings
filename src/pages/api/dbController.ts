import Mongoose from 'mongoose'

export async function DBConnect() {
    if(Mongoose.connection.readyState>=1) return
    return Mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}