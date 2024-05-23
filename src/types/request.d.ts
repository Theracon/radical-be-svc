import { AuthRequest } from './auth'
import { Book } from './book'

export type UserRequest = {
  data?: AuthRequest | Book | string
  token?: string
}
