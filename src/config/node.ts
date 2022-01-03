const env = process.env.NODE_ENV || 'development'
const apiPrefix = process.env.API_PREFIX || 'v0'
const port = process.env.PORT || '3000'

export const NodeConfig = {
  env,
  apiPrefix,
  port,
}
