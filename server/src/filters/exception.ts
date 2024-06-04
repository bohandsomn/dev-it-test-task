import { NextFunction, Request, Response } from 'express'

import { HttpStatus } from '@/constants'
import { IFilter } from '@/interfaces'

export class ExceptionFilter implements IFilter {
    catch(
        error: unknown,
        _request: Request,
        response: Response,
        _next: NextFunction,
    ) {
        console.error(
            `An unknown error occurred while processing the request`,
            error,
        )
        let errorMessage: string | null = null
        if (error instanceof Error) {
            errorMessage = error.message
        }
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: {
                message: errorMessage,
                error: errorMessage,
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            },
        })
    }
}
