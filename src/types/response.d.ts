import { Auth } from './auth'
import { Book } from './book'
import { User } from './user'

export type UserResponse = {
  isError: boolean
  message: string
  data: Book | Book[] | User | Auth | string
}
