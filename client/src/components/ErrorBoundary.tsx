import { FC, useEffect } from 'react'
import styles from '@/styles/common.module.css'
import { useNotificationState } from '@/utils'

interface IErrorBoundaryProps {
    errorMessage: string
}

export const ErrorBoundary: FC<IErrorBoundaryProps> = ({ errorMessage }) => {
    const notify = useNotificationState()
    useEffect(() => {
        notify.error(errorMessage)
    }, [errorMessage])
    return <div className={styles.error}>{errorMessage}</div>
}
