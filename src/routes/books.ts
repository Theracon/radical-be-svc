import express from 'express'

import {
  addFavourite,
  deleteFavourite,
  getBestSellers,
  getFavourites,
  updateFavourite
} from '../controllers/bookController'
import { authorizeRequest } from '../middleware/auth'

const router = express.Router()

router.get('/best-sellers/all', authorizeRequest, getBestSellers)

router.get('/:userId', authorizeRequest, getFavourites)

router.post('/:userId', authorizeRequest, addFavourite)

router.put('/:userId/:bookId', authorizeRequest, updateFavourite)

router.delete('/:userId/:bookId', authorizeRequest, deleteFavourite)

export default router
