import { Log } from '../helpers'

class NativeEvent {
  public process(): void {
    // Catch the Process's uncaught-exception
    process.on('uncaughtException', (exception) => Log.error(exception.stack))

    // Catch the Process's warning event
    process.on('warning', (warning) => Log.warn(warning.stack))
  }
}

export default new NativeEvent()
