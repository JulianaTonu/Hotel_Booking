import { getUserdata, storeRecentSearchedCities } from "../controllers/userController.js"
import express from 'express'
import { protect } from "../middleware/authMiddleware.js"

const userRouter = express.Router()

userRouter.get('/', protect, getUserdata)
userRouter.post('/store-recent-search', protect, storeRecentSearchedCities)

export default userRouter