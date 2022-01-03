import { Sequelize, Options } from 'sequelize'

import { Log } from '../helpers'
import { DatabaseConfig } from '../config/database'

class Database {
  private readonly options: Options
  public readonly postgres: Sequelize

  constructor() {
    this.options = {
      host: DatabaseConfig.dbHost,
      dialect: DatabaseConfig.dbType,
      port: DatabaseConfig.dbPort,
      ssl: DatabaseConfig.sslEnabled,
      logging: (message) => {
        Log.info(message)
      },
    }
    this.postgres = new Sequelize(
      DatabaseConfig.dbName,
      DatabaseConfig.dbUsername,
      DatabaseConfig.dbPassword,
      this.options,
    )
  }

  public async init(): Promise<void> {
    Log.info('DATABASE :: need to add init code...')
    try {
      Log.info('Connecting with db...')
      await this.postgres.authenticate()
      Log.info('Connection has been established successfully...')
      Log.info('Syncing db...')
      await this.postgres.sync()
      Log.info('Sync successfully...')
    } catch (error) {
      Log.error('Unable to connect to the database:', error)
    }
  }
}

export default new Database()
