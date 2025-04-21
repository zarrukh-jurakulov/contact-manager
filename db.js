import mongoose from 'mongoose';

export {mongoose}

const MONGO_URI = 'mongodb://localhost:27017/contact_manager';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Connected to MongoDB')
    } catch (err) {
        console.log('Could not connect to MongoDB', err)
        process.exit(1);
    }
}

