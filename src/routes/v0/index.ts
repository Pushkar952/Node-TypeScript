import { Router } from 'express'

import healthCheck from './healthCheck'
import countries from './countries'

const router = Router()

router.use('/health-check', healthCheck)
router.use('/countries', countries)

export default router
