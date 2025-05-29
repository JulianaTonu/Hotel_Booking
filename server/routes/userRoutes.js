import { getUserdata } from "../controllers/userController.js"
import express from 'express'
import { protect } from "../middleware/authMiddleware.js"

const userRouter = express.Router()

userRouter.get('/', protect, getUserdata)

export default userRouter