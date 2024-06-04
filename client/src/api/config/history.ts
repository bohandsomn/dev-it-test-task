import { configuration } from '@/config'
import { AxiosAppApi, IAppApi } from '../appApi'

export const historyApi: IAppApi = new AxiosAppApi({
    baseUrl: configuration.serverUri,
})
