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
})

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

export default Client;