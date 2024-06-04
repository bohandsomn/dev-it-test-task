import { configuration } from '@/config'

export function checkConcurrencyLimit(data: unknown): data is number {
    if (typeof data !== 'number') {
        return false
    }
    if (isNaN(data)) {
        return false
    }
    if (!isFinite(data)) {
        return false
    }
    if (data < configuration.limit.min) {
        return false
    }
    if (data > configuration.limit.max) {
        return false
    }
    return true
}
