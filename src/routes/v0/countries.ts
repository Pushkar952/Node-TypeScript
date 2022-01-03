import { Router } from 'express'

import CountriesController from '../../controllers/countries'

const router = Router()

/**
 * @openapi
 * /v0/countries:
 *   get:
 *     tags:
 *       - Country
 *     summary: This route is used to check if the server is online and running
 *     consume:
 *       - application/json
 *       - text
 *     responses:
 *       200:
 *         content:
 *              application/json:
 *                  description: Returns error response
 *                  schema:
 *                      properties:
 *                          status:
 *                            type: boolean
 *                            example: true
 *                          data:
 *                              type: array
 *                              items:
 *                                $ref: '#components/schemas/Country'
 *       error:
 *          content:
 *              application/json:
 *                  description: Returns error response
 *                  schema:
 *                      $ref: '#components/schemas/ErrorPayload'
 */
router.get('/', CountriesController.getCountries)

export default router
