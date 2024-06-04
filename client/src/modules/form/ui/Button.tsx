import { FC, memo } from 'react'
import styles from '@/styles/form.module.css'

interface IButtonProps {
    disabled?: boolean
}

export const Button: FC<IButtonProps> = memo(({ disabled = false }) => {
    return (
        <button type="submit" className={styles.button} disabled={disabled}>
            Start
        </button>
    )
})
