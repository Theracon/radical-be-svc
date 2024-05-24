import User from '../models/User'

export type AuthRequest = {
  email: string
  password: string
}

export type AuthResponse = {
  token: string
  user: User
}
