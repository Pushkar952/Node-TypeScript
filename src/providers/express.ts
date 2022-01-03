import express, { Express as ExpressApp } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import http from 'http'

import { NodeConfig } from '../config/node'
import Routes from './routes'
import ErrorHandler from '../exception/handler'
import {
  normalizePort,
  onServerError,
  onServerListening,
} from '../utils/express'

class Express {
  public readonly app: ExpressApp
  private readonly formatter =
    NodeConfig.env === 'development'
      ? 'dev'
      : ':method :url :status :res[content-length] - :response-time ms'
  private readonly port = normalizePort(NodeConfig.port)
  constructor() {
    this.app = express()
    this.mountRequiredMiddlewares()
    this.mountRoutes()
    this.mountErrorHandler()
  }

  mountRequiredMiddlewares() {
    this.app.use(logger(this.formatter))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(cookieParser())
  }
  mountRoutes() {
    Routes.mountApis(this.app)
  }

  mountErrorHandler() {
    this.app.use(ErrorHandler.handleError)
    this.app.use(ErrorHandler.notFoundError)
  }

  init() {
    this.app.set('port', this.port)
    const server = http.createServer(this.app)
    server.listen(this.port)
    server.on('error', onServerError)
    server.on('listening', onServerListening)
  }
}

export default new Express()
