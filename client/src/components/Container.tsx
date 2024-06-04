import { FC, PropsWithChildren } from 'react'
import styles from '@/styles/common.module.css'

export const Container: FC<PropsWithChildren> = ({ children }) => {
    return <section className={styles.section}>{children}</section>
}
