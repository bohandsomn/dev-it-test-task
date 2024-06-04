import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import { configuration } from '@/config'
import { UseFilters } from '@/decorators'
import { ExceptionFilter } from '@/filters'
import { historyRouter } from '@/history'

async function bootstrap() {
    const exceptionFilter = new ExceptionFilter()

    const app = express()
    app.use(cors({ origin: configuration.clientUri }))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(historyRouter)
    app.use(UseFilters(exceptionFilter))

    app.listen(configuration.port, () => {
        console.log(`Server is running on port ${configuration.port}`)
    })
}

bootstrap()
