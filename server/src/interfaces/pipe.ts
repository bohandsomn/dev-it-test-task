import { NextFunction, Request, Response } from 'express'

export interface IPipe {
    transform(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<void>
}
