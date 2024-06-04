import { IServerState } from '@/types'
import { IWithSetter } from '@/utils'

export type IHistoryState = IServerState<number[]>

export type IHistoryContext = IWithSetter<
    IServerState<number[]> & {
        getState(): IHistoryState
    }
>
