export interface ISuccessServerState<Data> {
    data: Data
    error: null
}

export interface IFailureServerState {
    data: null
    error: string
}

export type IServerState<Data> = ISuccessServerState<Data> | IFailureServerState
