import {
    CLIENT_URI,
    MAX_DELAY,
    MAX_INDEX,
    MAX_REQUESTS,
    MIN_DELAY,
    MIN_INDEX,
    PORT,
} from './environment'

export const configuration = {
    port: parseInt(PORT),
    clientUri: CLIENT_URI,
    delay: {
        min: parseInt(MIN_DELAY),
        max: parseInt(MAX_DELAY),
    },
    index: {
        min: parseInt(MIN_INDEX),
        max: parseInt(MAX_INDEX),
    },
    maxRequests: parseInt(MAX_REQUESTS),
}
