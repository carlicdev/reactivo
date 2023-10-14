import mongoose, { Schema } from 'mongoose';

const clientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Please provide a valid email']
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number']
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    },
    clientType: {
        type: String,
        default: 'client'
    },
    company: {
        type: String,
        default: null
    },
    position: {
        type: String,
        default: null
    }
})

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

export default Client;