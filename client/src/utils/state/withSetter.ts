import { StateCreator } from 'zustand'
import { IWithSetter } from './types'

export function withSetter<State>(
    initializer: StateCreator<State>,
): StateCreator<IWithSetter<State>> {
    return (set, get, store) => {
        const state = initializer(set, get, store)
        return {
            ...state,
            setState(partial) {
                // @ts-ignore
                set(partial)
            },
        }
    }
}
