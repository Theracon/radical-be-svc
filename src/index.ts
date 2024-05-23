import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import authRouter from './routes/auth'
import userRouter from './routes/users'
import bookRouter from './routes/books'

require('dotenv').config({ path: require('find-config')('.env') })

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT ?? 3000

app.get(['/', '/api', '/api/v1'], (_req, res) => {
  res.send('Radical API v1.0')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/books', bookRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
