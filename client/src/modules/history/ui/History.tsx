import { EmptyList, ErrorBoundary } from '@/components'
import styles from '@/styles/history.module.css'
import { useHistory } from '../hooks'

export const History = () => {
    const { list, errorMessage, emptyMessage } = useHistory()
    if (errorMessage) {
        return <ErrorBoundary errorMessage={errorMessage} />
    }
    if (list?.length === 0) {
        return <EmptyList message={emptyMessage} />
    }
    return (
        <ul className={styles.list}>
            {list?.map((index) => (
                <li key={index} className={styles['list-item']}>
                    {index}
                </li>
            ))}
        </ul>
    )
}
