// Type definitions for [neo-wave/chalog]
// Project: [https://github.com/neo-wave/chalog]

declare module 'chalog' {
  export interface Logger {
    dateFormat: string
    debug(msg: string): void
    info(msg: string): void
    note(msg: string): void
    warn(msg: string): void
    error(msg: string): void
  }
  const logger: Logger
  export default logger
}
