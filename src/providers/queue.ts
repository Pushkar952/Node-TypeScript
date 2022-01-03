import * as kue from 'kue'
import { QueueConfig } from '../config/queue'
import { Log } from '../helpers'

class Queue {
  public jobs: any

  constructor() {
    this.jobs = kue.createQueue({
      prefix: QueueConfig.redisPrefix,
      redis: {
        port: QueueConfig.redisHttpPort,
        host: QueueConfig.redisHttpHost,
        db: QueueConfig.redisDB,
      },
    })

    this.jobs
      .on('job enqueue', (_id: never, _type: never) =>
        Log.info(`Queue :: #${_id} Processing of type '${_type}'`),
      )
      .on('job complete', (_id: never) => this.removeProcessedJob(_id))
  }

  public dispatch<T = never, P = never>(
    _jobName: string,
    _args: T,
    _callback: (payload?: P) => void,
  ): void {
    this.jobs.create(_jobName, _args).save()
    this.process(_jobName, 3, _callback)
  }

  private removeProcessedJob(_id: never): void {
    Log.info(`Queue :: #${_id} Processed`)
    kue.Job.get(_id, (_err, _job) => {
      if (_err) {
        return
      }
      _job?.remove((_err: never) => {
        if (_err) {
          throw _err
        }
        Log.info(`Queue :: #${_id} Removed Processed Job`)
      })
    })
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private process<T = never>(
    _jobName: string,
    _count: number,
    _callback: (payload?: T) => void,
  ): void {
    this.jobs.process(
      _jobName,
      _count,
      (_job: { data: never }, _done: () => void) => {
        _done()
        _callback(_job.data)
      },
    )
  }
}

export default new Queue()
