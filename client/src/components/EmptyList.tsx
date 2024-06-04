import { FC } from 'react'
import styles from '@/styles/common.module.css'

interface IEmptyListProps {
    message: string
}

export const EmptyList: FC<IEmptyListProps> = ({ message }) => {
    return <div className={styles.empty}>{message}</div>
}
