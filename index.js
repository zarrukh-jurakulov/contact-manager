import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import {connectDB} from './db.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
