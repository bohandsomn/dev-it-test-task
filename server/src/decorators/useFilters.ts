import { ErrorRequestHandler } from 'express'

import { IFilter } from '@/interfaces'

export const UseFilters = (...filters: IFilter[]): ErrorRequestHandler[] => {
    return filters.map((pipe) => pipe.catch.bind(pipe))
}
