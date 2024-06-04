import { configuration } from '@/config'

import { IHistoryService, IIndexInput } from '../interfaces'

export class HistoryService implements IHistoryService {
    index(input: IIndexInput): Promise<number> {
        return new Promise<number>((resolve) => {
            const { min: minDelay, max: maxDelay } = configuration.delay
            const delay = Math.round(
                Math.random() * (maxDelay - minDelay) + minDelay,
            )
            setTimeout(() => {
                resolve(input.index)
            }, delay)
        })
    }
}
