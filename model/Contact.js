import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    type: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;