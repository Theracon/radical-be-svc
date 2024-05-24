import { Request, Response } from 'express'

import { ErrorHelper } from '../helpers/error'
import userService from '../services/userService'
import { ResponseHelper } from '../helpers/response'

const login = async (req: Request, res: Response) => {
  try {
    const response = await userService.login(req.body)
    return res.status(200).json(ResponseHelper(response))
  } catch (error) {
    return res.status(500).send(ErrorHelper(error))
  }
}

const register = async (req: Request, res: Response) => {
  try {
    const response = await userService.register(req.body)
    return res.status(201).json(ResponseHelper(response))
  } catch (error) {
    return res.status(500).send(ErrorHelper(error))
  }
}

const getProfile = async (req: Request, res: Response) => {
  try {
    const response = await userService.getProfile(req.body)
    return res.status(200).json(ResponseHelper(response))
  } catch (error) {
    return res.status(500).send(ErrorHelper(error))
  }
}

export { login, register, getProfile }
