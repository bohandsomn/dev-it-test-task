import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { HttpStatus } from '@/constants'
import { IPipe } from '@/interfaces'

export class ValidationPipe implements IPipe {
    async transform(request: Request, response: Response, next: NextFunction) {
        const result = validationResult(request)
        if (!result.isEmpty()) {
            response.status(HttpStatus.BAD_REQUEST).json({
                error: result.array().map((error) => error.msg),
            })
            return
        }
        next()
    }
}
