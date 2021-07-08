import { Options } from 'swagger-jsdoc'
import { NodeConfig } from './node'

export const swaggerJsdocConfig: Options = {
  swaggerDefinition: {
    openapi: '3.0.2',
    info: {
      description: `Swagger API documentation for Simbex Reload APIs`,
      title: `Simbex Reload APIs`,
      version: 'v0',
    },
    servers: [
      {
        url: `http://localhost:${NodeConfig.port}`,
        description: `LOCAL ${NodeConfig.env}`,
      },
    ],
  },
  apis: ['./dist/swagger/*.js', `./dist/routes/**/*.js`],
}
