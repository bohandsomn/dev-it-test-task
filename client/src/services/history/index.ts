import { historyApi } from '@/api'
import { HistoryService } from './historyService'

export const historyService = new HistoryService(historyApi)
