import { AuthResponse } from '../types/auth'
import { UserRequest } from '../types/request'
import { User } from '../types/user'

const registerWithUsernameAndPassword = (request: UserRequest): User | null => {
  console.log(request)
  return null
}

const loginWithUsernameAndPassword = (request: UserRequest): AuthResponse | null => {
  console.log(request)
  return null
}

export default {
  registerWithUsernameAndPassword,
  loginWithUsernameAndPassword
}
