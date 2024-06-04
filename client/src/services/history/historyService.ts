import { HttpMethod, IAppApi } from '@/api'
import { IServerErrorDto } from '@/types'
import { IHistoryService, ISendIndexResponse } from './types'

export class HistoryService implements IHistoryService {
    constructor(private readonly api: IAppApi) {}

    async sendIndex(index: number): Promise<ISendIndexResponse> {
        const { data, error } = await this.api.request<
            ISendIndexResponse,
            IServerErrorDto
        >({
            body: {
                index,
            },
            method: HttpMethod.POST,
            url: '/api',
        })
        if (data) {
            return data
        }
        throw error
    }
}
