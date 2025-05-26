import express from 'express';
import "dotenv/config";
import cors from "cors";
import connectDB from './controllers/db.js';
import { clerkMiddleware } from 'clerk/express';


connectDB()

const app = express()
app.use(cors()) // Enable Cross-Origin Resource sharing

// Middleware 
app.use(express.json())
app.use(clerkMiddleware())


app.get('/', (req, res) => res.send("Tonu's API is working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) 