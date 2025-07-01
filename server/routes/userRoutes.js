import { getUserdata, storeRecentSearchedCities } from "../controllers/userController.js"
import express from 'express'
import { protect } from "../middleware/authMiddleware.js"
import { requireAuth } from "@clerk/express";
import { registerHotel } from "../controllers/hotelController.js";
const userRouter = express.Router()

userRouter.get('/', protect, getUserdata)
userRouter.post('/store-recent-search', protect, storeRecentSearchedCities)
userRouter.post("/api/hotels", requireAuth(), protect, registerHotel);

export default userRouter