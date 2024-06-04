import {
    GROUP_DELAY,
    MAX_INDEX,
    MIN_INDEX,
    REQUESTS,
    SERVER_URI,
} from './environment'

export const configuration = {
    limit: {
        min: parseInt(MIN_INDEX),
        max: parseInt(MAX_INDEX),
    },
    requests: parseInt(REQUESTS),
    groupDelay: parseInt(GROUP_DELAY),
    serverUri: SERVER_URI,
}
