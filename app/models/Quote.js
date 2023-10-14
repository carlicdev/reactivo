import mongoose, { Schema } from 'mongoose';

const quoteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    lastname: {
        type: String,
        required: [true, 'Please provide a lastname']
    },
    service: {
        type: String,
        required: [true, 'Please choose a service']
    },
    email: {
        type: String,
        required: [true, 'Please provide a valid email']
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number']
    },
    message: {
        type: String,
        required: [true, 'Please type a message']
    },
    assignedTo: {
        type: String,
        default: null
    },
    status: {
        type: String,
        default: 'pending'
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    },
    comments: {
        type: [String]
    }
})

const Quote = mongoose.models.Quote || mongoose.model('Quote', quoteSchema);

export default Quote;