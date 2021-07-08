import { NextFunction, Request, Response } from 'express'

import { CountryAttributes } from '../modals/countries'
import { CustomResponse } from '../types/response'
import { Log } from '../helpers'
import { ErrorCodes, ErrorMessages } from '../config/errors'
import CountriesModel from '../modals/countries'

export default class CountriesController {
  public static async getCountries(
    req: Request,
    res: Response<CustomResponse<CountryAttributes[]>>,
    next: NextFunction,
  ): Promise<void> {
    try {
      const countries = await CountriesModel.findAll({
        attributes: ['id', 'name', 'label', 'description'],
      })
      res.send({
        status: true,
        data: countries,
      })
    } catch (error) {
      Log.error(`REQUEST :: ${error.message}`, error)
      res.status(ErrorCodes.ServerError)
      next(ErrorMessages.SomethingWentWrong)
    }
  }
}
