import { AuthResponse } from '../types/auth'
import { UserRequest } from '../types/request'
import { User } from '../types/user'

const registerWithUsernameAndPassword = (request: UserRequest): User | null => {
  return null
}

const loginWithUsernameAndPassword = (request: UserRequest): AuthResponse | null => {
  return null
}

export default {
  registerWithUsernameAndPassword,
  loginWithUsernameAndPassword
}
