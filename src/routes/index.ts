import { Router } from 'express'
import { Swagger } from '../helpers'
import version0 from './v0'

const router = Router()

router.use('/v0', version0)

router.use('/swagger', Swagger.server, Swagger.setup())

export default router
