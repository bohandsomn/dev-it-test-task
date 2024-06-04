import Joi from 'joi'

const envSchema = Joi.object({
    PORT: Joi.number().required(),
    CLIENT_URI: Joi.string().required(),
    MIN_DELAY: Joi.number().integer().required(),
    MAX_DELAY: Joi.number().integer().required(),
    MAX_REQUESTS: Joi.number().integer().required(),
    MIN_INDEX: Joi.number().integer().default(0),
    MAX_INDEX: Joi.number().integer().default(100),
}).unknown(true)

const { error, value } = envSchema.validate(process.env)
if (error) {
    throw new Error(`Environment variable validation error: ${error.message}`)
}

export const {
    PORT,
    CLIENT_URI,
    MIN_DELAY,
    MAX_DELAY,
    MAX_REQUESTS,
    MIN_INDEX,
    MAX_INDEX,
} = value as Record<string, string>
