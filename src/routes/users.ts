import express from 'express'

const router = express.Router()

router.get('/profile', (_req, res) => {
  res.send('User profile')
})

export default router
