import { NextFunction, Request, Response } from 'express'
import { ErrorMessages, ErrorCodes } from '../config/errors'
import { ErrorResponse } from '../types/response'
import { Log } from '../helpers'

class Handler {
  public notFoundError(req: Request, res: Response<ErrorResponse>): void {
    Log.error(`NotFound :: ${ErrorCodes.NotFound} ${ErrorMessages.NotFound}`)
    res.status(ErrorCodes.NotFound)
    res.send({
      status: false,
      data: {
        message: ErrorMessages.NotFound,
      },
    })
  }

  public handleError(
    error: ErrorMessages,
    req: Request,
    res: Response<ErrorResponse>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction,
  ): void {
    Log.error(`API CALL :: ${error}`)
    res.send({
      status: false,
      data: {
        message: error,
      },
    })
  }
}

export default new Handler()
