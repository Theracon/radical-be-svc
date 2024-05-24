import bcrypt from 'bcrypt'
import jwt, { Secret, JwtPayload } from 'jsonwebtoken'

require('dotenv').config({ path: require('find-config')('.env') })

const SECRET_KEY: Secret = process.env.JWT_SECRET_KEY!

export const getToken = (email: string): string => {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: '7d' })
}

export const createPasswordHash = async (password: string) => {
  const SALT_ROUNDS = 8
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)
  return String(passwordHash)
}

export const decodeToken = (token: string): JwtPayload | string => {
  return jwt.verify(token, SECRET_KEY)
}

export const comparePasswords = (password: string, storedHash: string): boolean => {
  return bcrypt.compareSync(password, storedHash)
}
