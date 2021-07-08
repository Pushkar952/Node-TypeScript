import { NextFunction, Request, Response } from 'express'
import { ErrorCodes, ErrorMessages } from '../config/errors'

export default class HealthCheck {
  static ok(req: Request, res: Response<'ok'>): void {
    res.send('ok')
  }
  static error(req: Request, res: Response, next: NextFunction): void {
    res.status(ErrorCodes.ServerError)
    next(ErrorMessages.SomethingWentWrong)
  }

  static notFound(req: Request, res: Response, next: NextFunction): void {
    next()
  }
}
