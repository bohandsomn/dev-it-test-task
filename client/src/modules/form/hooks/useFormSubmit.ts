import { useState } from 'react'
import { configuration } from '@/config'
import { useHistoryDispatch, useHistoryState } from '@/history'
import { historyService } from '@/services'
import { IEventPreventDefault } from '@/types'
import { getServerErrorMessage, useNotificationState } from '@/utils'
import { useFormState } from '../context'

export const useFormSubmit = () => {
    const [disabled, setDisabled] = useState(false)
    const concurrencyLimit = useFormState((state) => state.concurrencyLimit)
    const dispatch = useHistoryDispatch()
    const notify = useNotificationState()
    const getState = useHistoryState((state) => state.getState)
    const submitHandler = async (event: IEventPreventDefault) => {
        event.preventDefault()
        if (!concurrencyLimit) {
            return notify.error('Enter concurrency limit')
        }
        setDisabled(true)
        dispatch({
            data: [],
            error: null,
        })
        let index = 1
        const recursiveRequest = async (): Promise<void> => {
            try {
                const hasError = getState().error !== null
                const isLastIndex = index > configuration.requests
                if (hasError || isLastIndex) {
                    return
                }
                const start = Date.now()
                const { index: responseIndex } = await historyService.sendIndex(
                    index++,
                )
                const requestDelay = Date.now() - start
                dispatch((previous) => ({
                    data: [...(previous.data ?? []), responseIndex],
                }))
                // If less than 1 second (groupDelay), wait this time
                if (requestDelay < configuration.groupDelay) {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(recursiveRequest())
                        }, configuration.groupDelay - requestDelay)
                    })
                } else {
                    return recursiveRequest()
                }
            } catch (error) {
                const errorMessage =
                    getServerErrorMessage(error) ??
                    'Something went wrong while sending index'
                dispatch({
                    data: null,
                    error: errorMessage,
                })
            }
        }
        // Send a group of concurrencyLimit requests
        await Promise.all(
            Array.from({ length: concurrencyLimit }).map(() =>
                recursiveRequest(),
            ),
        )
        setDisabled(false)
    }
    return {
        disabled,
        submitHandler,
    }
}
