import { NextFunction, Request, Response, Router } from 'express'

import { HttpStatus } from '@/constants'
import { UsePipes } from '@/decorators'
import { DosPipe } from '@/pipes'

import { HistoryController } from './controllers'
import { IndexPipe } from './pipes'
import { HistoryService } from './services'

const indexPipe = new IndexPipe()
const dosPipe = new DosPipe()
const historyService = new HistoryService()
const historyController = new HistoryController(historyService)

export const historyRouter = Router()
historyRouter.post(
    '/api',
    UsePipes(dosPipe, indexPipe),
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const index = await historyController.index(request.body.index)
            response.status(HttpStatus.OK).json({
                index,
            })
        } catch (error) {
            console.error(
                'An error occurred while processing the history request',
                error,
            )
            next(error)
        }
    },
)
