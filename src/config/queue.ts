const queueMonitor = (process.env.QUEUE_HTTP_ENABLED || true) as boolean
const queueMonitorHttpPort = (process.env.QUEUE_HTTP_PORT || 5550) as number

const redisHttpPort = process.env.REDIS_QUEUE_PORT || 6379
const redisHttpHost = process.env.REDIS_QUEUE_HOST || 'localhost'
const redisDB = process.env.REDIS_QUEUE_DB || 'q'
const redisPrefix = process.env.REDIS_QUEUE_PREFIX || 3

export const QueueConfig = {
  queueMonitor,
  queueMonitorHttpPort,
  redisDB,
  redisHttpHost,
  redisHttpPort,
  redisPrefix,
}
