import * as path from 'path'
import dotenv from 'dotenv'

import { Log } from '../helpers'
import Express from './express'
import Database from './database'
import { NodeConfig } from '../config/node'

class App {
  // Clear the console
  public clearConsole(): void {
    process.stdout.write('\x1B[2J\x1B[0f')
  }

  // Loads your dotenv file
  public loadConfiguration(): void {
    Log.info('Configuration :: Booting @ Master...')

    dotenv.config({ path: path.join(__dirname, '../../.env') })
  }

  // Loads your Server
  public loadServer(): void {
    Log.info('Server :: Booting @ Master...')
    Express.init()
  }

  // Loads the Worker Cluster
  public loadWorker(): void {
    Log.info('Worker :: Booting @ Master...')
  }

  public loadDatabase(): void {
    Log.info('Database :: Booting @ Master...')

    Database.init()
  }

  public loadHelpers() {
    if (NodeConfig.env === 'development') {
      Log.enableConsole?.()
    } else {
      Log.disableConsole?.()
    }
  }
}

export default new App()
