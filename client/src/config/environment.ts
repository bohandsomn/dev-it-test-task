import Joi from 'joi'

const envSchema = Joi.object({
    MIN_INDEX: Joi.number().required(),
    MAX_INDEX: Joi.number().required(),
    REQUESTS: Joi.number().required(),
    GROUP_DELAY: Joi.number().required(),
    SERVER_URI: Joi.string().required(),
})
const { error, value } = envSchema.validate(
    process.env,
) as Joi.ValidationResult<Record<string, string>>
if (error) {
    throw new Error(`Environment variable validation error: ${error.message}`)
}

export const { MIN_INDEX, MAX_INDEX, REQUESTS, GROUP_DELAY, SERVER_URI } = value
