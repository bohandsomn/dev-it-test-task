import { ErrorRequestHandler } from 'express'

export interface IFilter {
    catch: ErrorRequestHandler
}
