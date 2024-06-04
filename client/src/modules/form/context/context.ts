import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IUseDispatch, IUseState } from '@/types'
import { withSetter } from '@/utils'
import { IFormContext, IFormState } from './types'

export const useFormState: IUseState<IFormContext> = create<IFormContext>()(
    devtools(
        withSetter((_) => ({
            concurrencyLimit: null,
        })),
        {
            name: 'form',
        },
    ),
)

export const useFormDispatch: IUseDispatch<IFormState> = () => {
    return useFormState((state) => state.setState) as ReturnType<
        IUseDispatch<IFormState>
    >
}
