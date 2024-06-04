import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'

import { configuration } from '@/config'
import { IPipe } from '@/interfaces'

export class IndexPipe implements IPipe {
    async transform(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<void> {
        const handler = body('index').isInt({
            min: configuration.index.min,
            max: configuration.index.max,
        })
        return handler(request, response, next)
    }
}
