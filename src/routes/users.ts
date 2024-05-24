import express from 'express'
import { login, register, getProfile } from '../controllers/userController'
import { authorizeRequest } from '../middleware/auth'

const router = express.Router()

router.post('/login', login)

router.post('/register', register)

router.get('/profile', authorizeRequest, getProfile)

export default router
