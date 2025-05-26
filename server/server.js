import express from 'express';
import "dotenv/config";
import cors from "cors";
import connectDB from './controllers/db.js';

connectDB()

const app = express()
app.use(cors()) // Enable Cross-Origin Resource sharing

app.get('/', (req, res)=>res.send("Tonu's API is working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`)) 