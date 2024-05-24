import User from '../models/User'
import { AuthRequest, AuthResponse } from '../types/auth'
import { comparePasswords, createPasswordHash, getToken } from '../utils/auth'

const login = async (request: AuthRequest): Promise<AuthResponse | null> => {
  try {
    const { email, password } = request
    const user = await User.findOne({ where: { email } })

    if (user) {
      if (comparePasswords(password, user.password)) {
        const token = getToken(email)
        return { token, user }
      } else {
        throw new Error('Invalid credentials')
      }
    } else {
      throw new Error('Invalid credentials')
    }
  } catch (error) {
    throw error
  }
}

const register = async (request: AuthRequest): Promise<AuthResponse | null> => {
  try {
    const { email, password } = request
    const passwordHash = await createPasswordHash(password)
    const data = { email, password: passwordHash }
    const user = await User.create(data)
    if (!user) return null
    const token = getToken(email)
    return { token, user }
  } catch (error) {
    throw error
  }
}

const getProfile = async (email: string) => {
  try {
    const user = await User.findOne({
      where: { email }
    })
    return user
  } catch (error) {
    throw error
  }
}

export default {
  getProfile,
  register,
  login
}
