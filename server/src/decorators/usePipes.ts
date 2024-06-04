import { Handler } from 'express'

import { IPipe } from '@/interfaces'

export const UsePipes = (...pipes: IPipe[]): Handler[] => {
    return pipes.map((pipe) => pipe.transform.bind(pipe))
}
