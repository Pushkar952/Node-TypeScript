import winston from 'winston'

interface Logger extends winston.Logger {
  enableConsole?: () => void
  disableConsole?: () => void
}

const logger: Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.json(),
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.prettyPrint(),
  ),
  defaultMeta: { service: 'app-service' },
  transports: [
    new winston.transports.File({
      filename: '.logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({ filename: '.logs/combined.log' }),
  ],
})

const consoleTransporter = new winston.transports.Console({
  format: winston.format.simple(),
})

logger.enableConsole = () => {
  logger.add(consoleTransporter)
}

logger.disableConsole = () => {
  logger.remove(consoleTransporter)
}

export const Log = logger
