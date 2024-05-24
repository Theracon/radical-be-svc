import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'

import { AuthRequest } from './auth'
import { Book } from './book'

export interface UserRequest extends Request {
  token?: JwtPayload | string
}
