import { NodeConfig } from '../config/node'
import { Log } from '../helpers'
import { Server } from 'http'
import debug from 'debug'
/**
 * Normalize a port into a number, string, or false.
 */
export function normalizePort(val: string): string | number | boolean {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

export function onServerError(error: Record<string, string>): void {
  if (error.syscall !== 'listen') {
    throw error
  }

  const port = normalizePort(NodeConfig.port)
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      Log.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      Log.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

export function onServerListening(server: Server) {
  return (): void => {
    const addr = server.address()
    const bind =
      typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port
    debug('Listening on ' + bind)
  }
}
