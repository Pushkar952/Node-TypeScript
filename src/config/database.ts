const dbHost = process.env.DB_HOST || 'localhost'

const dbPort = parseInt(process.env.DB_PORT || '3306')

const dbType = 'postgres' as const

const sslEnabled = false

const dbUsername = process.env.DB_USERNAME || 'admin'

const dbPassword = process.env.DB_PASSWORD || 'dsnfiwhsd9fhbewshd'

const dbName = process.env.DB_NAME || 'testing'

export const DatabaseConfig = {
  dbHost,
  dbName,
  dbPassword,
  dbPort,
  dbType,
  sslEnabled,
  dbUsername,
}
