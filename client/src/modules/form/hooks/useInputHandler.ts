import { configuration } from '@/config'
import { IEventTargetValue } from '@/types'
import { checkConcurrencyLimit, useNotificationState } from '@/utils'
import { useFormDispatch, useFormState } from '../context'

export const useInputHandler = () => {
    const value = useFormState(({ concurrencyLimit }) => {
        if (concurrencyLimit === null) {
            return ''
        }
        return concurrencyLimit.toString()
    })
    const dispatch = useFormDispatch()
    const notify = useNotificationState()
    const changeHandler = (event: IEventTargetValue) => {
        const value = event.target.value
        if (!value) {
            return dispatch({
                concurrencyLimit: null,
            })
        }
        const concurrencyLimit = parseInt(value)
        if (!checkConcurrencyLimit(concurrencyLimit)) {
            return notify.error(`Your concurrency limit is not valid`)
        }
        dispatch({
            concurrencyLimit,
        })
    }
    const placeholder = 'Enter concurrency limit'
    const title = `Concurrency limit should be between ${configuration.limit.min} and ${configuration.limit.max}`
    return {
        value,
        changeHandler,
        placeholder,
        title,
    }
}
