import express from 'express'

const router = express.Router()

router.post('/register', (_req, res) => {
  res.send('Register')
})

router.post('/login', (_req, res) => {
  res.send('Login')
})

export default router
