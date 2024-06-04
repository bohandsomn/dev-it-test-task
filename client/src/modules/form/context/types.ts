import { IWithSetter } from '@/utils'

export interface IFormState {
    concurrencyLimit: number | null
}

export type IFormContext = IWithSetter<IFormState>
