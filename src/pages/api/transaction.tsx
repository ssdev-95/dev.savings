import Mongoose from 'mongoose'

const MODEL_NAME = process.env.MONGO_MODEL_NAME

const collection = process.env.MONGO_COLLECTION

const schema = new Mongoose.Schema({
    op: {
        type: String,
        required: true
    },
    descriptionn: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
    
}, { timestamps: true })

export default Mongoose.models[MODEL_NAME] || Mongoose.model(MODEL_NAME, schema, collection)
