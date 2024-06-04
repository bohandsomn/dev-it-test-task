import { NextFunction, Request, Response } from 'express'
import { RateLimitRequestHandler, rateLimit } from 'express-rate-limit'

import { configuration } from '@/config'
import { HttpStatus } from '@/constants'
import { IPipe } from '@/interfaces'

export class DosPipe implements IPipe {
    private readonly api: RateLimitRequestHandler

    constructor() {
        this.api = rateLimit({
            statusCode: HttpStatus.TOO_MANY_REQUESTS,
            message: 'Too many requests. Please try again later.',
            windowMs: 100,
            limit: configuration.maxRequests,
            handler(_request, response, _next, options) {
                return response.status(options.statusCode).send({
                    error: {
                        message: options.message,
                        error: options.message,
                        statusCode: options.statusCode,
                    },
                })
            },
        })
    }

    async transform(request: Request, response: Response, next: NextFunction) {
        return this.api(request, response, next)
    }
}
