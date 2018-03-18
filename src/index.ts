import c from 'chalk'

export interface ILogger {
  dateFormat: string
  debug(msg: string): void
  info(msg: string): void
  note(msg: string): void
  warn(msg: string): void
  error(msg: string): void
}

const logger: ILogger = {
  dateFormat: '',
  debug: (msg: string) => {
    console.log(c.white.bgBlue.bold('[DEBUG]') + c.gray(` ${msg}`))
  },
  info: (msg: string) => {
    console.log(c.white.bgBlue.bold('[INFO]') + c.white(` ${msg}`))
  },
  note: (msg: string) => {
    console.log(c.green.bgBlue.bold('[NOTE]') + c.green(` ${msg}`))
  },
  warn: (msg: string) => {
    console.log(c.white.bgBlue.bold('[WARN]') + c.yellow(` ${msg}`))
  },
  error: (msg: string) => {
    console.log(c.red.bgBlue.bold('[ERROR]') + c.red(` ${msg}`))
  }
}

export default logger
