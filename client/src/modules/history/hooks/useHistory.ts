import { useHistoryState } from '../context'

export const useHistory = () => {
    const list = useHistoryState((state) => state.data)
    const errorMessage = useHistoryState((state) => state.error)
    const emptyMessage = 'List of indexes is still empty'
    return {
        list,
        errorMessage,
        emptyMessage,
    }
}
