import { IHistoryController, IHistoryService } from '../interfaces'

export class HistoryController implements IHistoryController {
    constructor(private readonly historyService: IHistoryService) {}

    async index(index: number): Promise<number> {
        return this.historyService.index({ index })
    }
}
