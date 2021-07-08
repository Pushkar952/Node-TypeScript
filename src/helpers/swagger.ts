import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { swaggerJsdocConfig } from '../config/swagger'

class Swagger {
  public readonly server = swaggerUi.serve
  public setup() {
    const config = swaggerJSDoc(swaggerJsdocConfig)
    return swaggerUi.setup(config)
  }
}

export default new Swagger()
