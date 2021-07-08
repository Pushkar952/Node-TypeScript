#!/usr/bin/env node

import * as os from 'os'
import * as cluster from 'cluster'

import App from '../providers/app'
import NativeEvents from '../exception/nativeEvents'
import { Log } from '../helpers'
import { NodeConfig } from '../config/node'

const numCPUs = os.cpus().length

/**
 * Add console log to winston
 * */
App.loadHelpers()

/**
 * Load Configuration
 */
App.loadConfiguration()

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork()

    worker.on('exit', (code: number, signal: string) => {
      Log.info(
        `WORKER :: Worker ${process.pid} exited, CODE: ${code}, SIGNAL :${signal}`,
      )
      cluster.fork()
    })

    if (NodeConfig.env === 'development') {
      break
    }
  }

  /**
   * Catches the process events
   */
  NativeEvents.process()

  /**
   * Clear the console before the app runs
   */
  App.clearConsole()
  Log.info(`MASTER:: ${process.pid} is running`)

  /**
   * Run the Worker every minute
   * Note: we normally start worker after
   * the entire app is loaded
   */
  setTimeout(() => App.loadWorker(), 60000)
} else {
  /**
   * Run the Database pool
   */
  App.loadDatabase()

  /**
   * Run the Server on Clusters
   */
  App.loadServer()

  Log.info(`WORKER :: Worker ${process.pid} started`)
}
