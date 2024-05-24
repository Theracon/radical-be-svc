import { NextFunction, Request, Response } from 'express'

import { UserRequest } from '../types/request'
import { decodeToken } from '../utils/auth'

export const authorizeRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token) throw new Error('Unauthorized')

    const decoded = decodeToken(token)
    ;(req as UserRequest).token = decoded

    next()
  } catch (error) {
    res.status(401).send('Unauthorized')
  }
}
