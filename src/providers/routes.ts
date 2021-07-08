import { Log } from '../helpers'
import { Express } from 'express'

import routes from '../routes'

class Routes {
  public mountApis(_express: Express) {
    Log.info('Routes :: Mounting API Routes...')
    _express.use(routes)
  }
}

export default new Routes()
