import { FC } from 'react'
import { configuration } from '@/config'
import styles from '@/styles/form.module.css'
import { useInputHandler } from '../hooks'

interface IInputProps {
    disabled?: boolean
}

export const Input: FC<IInputProps> = ({ disabled = false }) => {
    const { value, changeHandler, placeholder, title } = useInputHandler()
    return (
        <input
            value={value}
            onChange={changeHandler}
            min={configuration.limit.min}
            max={configuration.limit.max}
            placeholder={placeholder}
            title={title}
            type="number"
            className={styles.input}
            disabled={disabled}
            required
        />
    )
}
