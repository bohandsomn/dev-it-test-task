import styles from '@/styles/form.module.css'
import { useFormSubmit } from '../hooks'
import { Button } from './Button'
import { Input } from './Input'

export const Form = () => {
    const { disabled, submitHandler } = useFormSubmit()
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input disabled={disabled} />
            <Button disabled={disabled} />
        </form>
    )
}
