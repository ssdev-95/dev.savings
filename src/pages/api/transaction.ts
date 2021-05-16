import Mongoose from 'mongoose'

const schema = new Mongoose.Schema({
    op: {
        type: String,
        required: true
    },
    description: {
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
}, {
    timestamps: true
})

export default Mongoose.models['Transaction'] || Mongoose.model('Transaction', schema, 'transactions')
