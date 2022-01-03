import { Router } from 'express'
import { HealthCheck } from '../../helpers'

const router = Router()

/**
 * @openapi
 * /v0/health-check/ok:
 *   get:
 *     tags:
 *       - Health Check
 *     summary: This route is used to check if the server is online and running
 *     consume:
 *       - application/json
 *       - text
 *     responses:
 *       200:
 *         description: Returns 'OK' if server is running
 *         schema:
 *           type: string
 *           example: 'OK'
 */
router.get('/ok', HealthCheck.ok)

/**
 * @openapi
 * /v0/health-check/error:
 *   get:
 *     tags:
 *       - Health Check
 *     summary: This route is used to check if the server is online and running
 *     consume:
 *       - application/json
 *       - text
 *     responses:
 *       500:
 *          content:
 *              application/json:
 *                  description: Returns error response
 *                  schema:
 *                      $ref: '#components/schemas/ErrorPayload'
 */
router.get('/error', HealthCheck.error)

/**
 * @openapi
 * /v0/health-check/404:
 *   get:
 *     tags:
 *       - Health Check
 *     summary: This route is used to check if the server is online and running
 *     consume:
 *       - application/json
 *       - text
 *     responses:
 *       404:
 *          content:
 *              application/json:
 *                  description: Returns error response
 *                  schema:
 *                      $ref: '#components/schemas/ErrorPayload'
 */
router.get('/404', HealthCheck.notFound)

export default router
