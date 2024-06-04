import { IIndexInput } from './indexInput'

export interface IHistoryService {
    index(input: IIndexInput): Promise<number>
}
