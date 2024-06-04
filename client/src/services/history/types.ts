export interface ISendIndexResponse {
    readonly index: number
}

export interface IHistoryService {
    sendIndex(index: number): Promise<ISendIndexResponse>
}
