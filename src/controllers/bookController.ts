import { Request, Response } from 'express'

import { ErrorHelper } from '../helpers/error'
import bookService from '../services/bookService'

const getBestSellers = async (req: Request, res: Response) => {
  try {
    const options: { [key: string]: string | number } = {}
    if (req.query.offset) {
      options.offset = Number(req.query.offset)
    }
    if (req.query.query) {
      options.query = String(req.query.query)
    }
    const books = await bookService.fetchBooksFromNytApi(options)
    return res.status(200).json(books)
  } catch (error) {
    return res.status(500).send(ErrorHelper(error))
  }
}

const getFavourites = async (req: Request, res: Response) => {
  try {
    const favourites = await bookService.fetchFavouritesByUserId(req.params.userId)
    return res.status(200).json(favourites)
  } catch (error) {
    return res.status(500).send(ErrorHelper(error))
  }
}

const addFavourite = async (req: Request, res: Response) => {
  try {
    const { title, author, price, rating } = req.body
    const { userId } = req.params
    const data = {
      title: String(title),
      author: String(author),
      price: String(Number(price).toFixed(1)),
      rating: Number(rating),
      userId: String(userId)
    }
    const favourites = await bookService.addNewFavourite(data)
    return res.status(200).json(favourites)
  } catch (error) {
    return res.status(500).send(ErrorHelper(error))
  }
}

const updateFavourite = async (req: Request, res: Response) => {
  try {
    const { rating, price } = req.body
    const userId = String(req.params.userId)
    const bookId = Number(req.params.bookId)
    const data = {
      rating: Number(rating),
      price: String(Number(price).toFixed(1))
    }
    const favourites = await bookService.updateFavourite(userId, bookId, data)
    return res.status(200).json(favourites)
  } catch (error) {
    return res.status(500).send(ErrorHelper(error))
  }
}

const deleteFavourite = async (req: Request, res: Response) => {
  try {
    const userId = String(req.params.userId)
    const bookId = Number(req.params.bookId)
    const favourites = await bookService.deleteFavourite(userId, bookId)
    return res.status(200).json(favourites)
  } catch (error) {
    return res.status(500).send(ErrorHelper(error))
  }
}

export { getBestSellers, getFavourites, addFavourite, updateFavourite, deleteFavourite }
