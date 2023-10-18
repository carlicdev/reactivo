import mongoose, { Schema } from 'mongoose';

const supportTicketSchema = new Schema({
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
    status: {
        type: String,
        default: 'open'
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    assignedAt:{
        type: Date,
        default: null
    },
    sentAt:{
        type: Date,
        default: null
    },
    closedAt: {
        type: Date,
        default: null
    },
    assignedTo: {
        type: String,
        default: null
    },
})

const SupportTicket = mongoose.models.SupportTicket || mongoose.model('SupportTicket', supportTicketSchema);

export default SupportTicket;