import { Container } from '@/components'
import { Form } from '@/form'
import { History } from '@/history'
import { AppProvider } from './AppProvider'

export const App = () => {
    return (
        <AppProvider>
            <Container>
                <Form />
                <History />
            </Container>
        </AppProvider>
    )
}
