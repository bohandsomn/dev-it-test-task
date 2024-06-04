import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IUseDispatch, IUseState } from '@/types'
import { withSetter } from '@/utils'
import { IHistoryContext, IHistoryState } from './types'

export const useHistoryState: IUseState<IHistoryContext> =
    create<IHistoryContext>()(
        devtools(
            withSetter((_set, get) => ({
                data: [],
                error: null,
                getState() {
                    return get()
                },
            })),
            {
                name: 'history',
            },
        ),
    )

export const useHistoryDispatch: IUseDispatch<IHistoryState> = () => {
    return useHistoryState((state) => state.setState) as ReturnType<
        IUseDispatch<IHistoryState>
    >
}
