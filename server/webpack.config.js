const path = require('path')
const nodeExternals = require('webpack-node-externals')
const dotenv = require('dotenv')
const { DefinePlugin } = require('webpack')

module.exports = (env, args) => {
    const mode = args.mode ?? 'production'
    dotenv.config({
        path: path.join(__dirname, `.env.${mode}`),
    })
    return {
        entry: './src/index.ts',
        mode,
        devtool: 'inline-source-map',
        target: 'node',
        externals: [nodeExternals()],
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                '@/config': path.join(__dirname, './src/config'),
                '@/constants': path.join(__dirname, './src/constants'),
                '@/filters': path.join(__dirname, './src/filters'),
                '@/interfaces': path.join(__dirname, './src/interfaces'),
                '@/pipes': path.join(__dirname, './src/pipes'),
                '@/modules': path.join(__dirname, './src/modules'),
                '@/history': path.join(__dirname, './src/modules/history'),
                '@/decorators': path.join(__dirname, './src/decorators'),
            },
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new DefinePlugin({
                'process.env': JSON.stringify({
                    PORT: process.env.PORT,
                    CLIENT_URI: process.env.CLIENT_URI,
                    MIN_DELAY: process.env.MIN_DELAY,
                    MAX_DELAY: process.env.MAX_DELAY,
                    MAX_REQUESTS: process.env.MAX_REQUESTS,
                }),
            }),
        ],
    }
}
