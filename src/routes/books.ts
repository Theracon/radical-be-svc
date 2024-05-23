import express from 'express'

import bookService from '../services/bookService'

const router = express.Router()

router.get('/best-sellers/all', async (req, res) => {
  const options: { [key: string]: string | number } = {}

  if (req.query.offset) options.offset = Number(req.query.offset)

  if (req.query.query) options.query = String(req.query.query)

  const books = await bookService.fetchBooksFromNytApi(options)

  res.json(books)
})

router.get('/:userId', (_req, res) => {
  res.send('Fetch all favourites by user ID')
})

router.post('/:userId', (_req, res) => {
  res.send('Add a new favourite')
})

router.put('/:bookId', (_req, res) => {
  res.send('Update a favourite')
})

router.delete('/:bookId', (_req, res) => {
  res.send('Delete a favourite')
})

export default router
