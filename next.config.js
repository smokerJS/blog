/* Import modules */
const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

/* Configuration */
const NextAppConfig = {
    // distDir: 'build',
    webpack: (config, options) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            '@': path.join(__dirname, 'components'),
            '@lib': path.join(__dirname, 'lib'),
        }
        config.module.rules = [
            ...config.module.rules,
            ...[{
                    test: /\.js$/,
                    loader: 'eslint-loader',
                    exclude: ['/node_modules/', '/.next/', '/out/'],
                    enforce: 'pre',
                    options: {
                        emitWarning: true,
                    },
                },{
                    test: /\.(png|woff|woff2|eot|ttf|gif|jpg|ico|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        publicPath: `/_next/static/files`,
                        outputPath: 'static/files'
                    }
                },{
                    test: /\.scss$/,
                    use: [
                        'sass-loader',
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [path.join(__dirname, 'assets/styles/*.scss')]
                            }
                        }
                    ],
                }
                
            ]
        ]
        return config;
    },
};


/* Export declaration */
module.exports = withPlugins([ 
    [ withCSS ],
    [ withTypescript(withSass) ], 
], NextAppConfig );