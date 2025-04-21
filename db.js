import mongoose from 'mongoose';
import dotenv from 'dotenv';

export {mongoose}
dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Connected to MongoDB')
    } catch (err) {
        console.log('Could not connect to MongoDB', err)
        process.exit(1);
    }
}

