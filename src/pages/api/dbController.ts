import Mongoose from 'mongoose'

const uri = "mongodb+srv://root:sudo@cluster0.o43jk.mongodb.net/finances?retryWrites=true&w=majority"

export async function DBConnect() {
    if(Mongoose.connection.readyState>=1) return
    return Mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}