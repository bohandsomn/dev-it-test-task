import CircularDependencyPlugin from 'circular-dependency-plugin'
import dotenv from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import { Configuration, DefinePlugin } from 'webpack'
import 'webpack-dev-server'

const config = (
    env: Partial<Record<string, string>>,
    argv: Partial<Record<string, string>>,
): Configuration => {
    const mode = (argv.mode ?? 'production') as Configuration['mode']
    dotenv.config({
        path: path.join(__dirname, `.env.${mode}`),
    })
    const port = parseInt(process.env.PORT ?? '3000')
    return {
        mode: mode,
        entry: './src/index.tsx',
        output: {
            filename: 'index.[hash].js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@/api': path.join(__dirname, './src/api'),
                '@/app': path.join(__dirname, './src/app'),
                '@/config': path.join(__dirname, './src/config'),
                '@/components': path.join(__dirname, './src/components'),
                '@/modules': path.join(__dirname, './src/modules'),
                '@/form': path.join(__dirname, './src/modules/form'),
                '@/history': path.join(__dirname, './src/modules/history'),
                '@/styles': path.join(__dirname, './src/styles'),
                '@/types': path.join(__dirname, './src/types'),
                '@/utils': path.join(__dirname, './src/utils'),
                '@/services': path.join(__dirname, './src/services'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css?$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new DefinePlugin({
                'process.env': JSON.stringify({
                    MIN_INDEX: process.env.MIN_INDEX,
                    MAX_INDEX: process.env.MAX_INDEX,
                    REQUESTS: process.env.REQUESTS,
                    GROUP_DELAY: process.env.GROUP_DELAY,
                    SERVER_URI: process.env.SERVER_URI,
                }),
            }),
            new CircularDependencyPlugin(),
        ],
        devServer: {
            port,
        },
        performance: {
            hints: false,
        },
    }
}

export default config
