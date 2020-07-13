/* Import modules */
const path = require('path');

/* Configuration */
const NextAppConfig = {
    // distDir: 'build',
    webpack: (config, options) => {
        config.module.rules = [
            ...config.module.rules,
            ...[{
                    test: /\.(png|woff|woff2|eot|ttf|gif|jpg|ico|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        publicPath: `/_next/static/files`,
                        outputPath: 'static/files'
                    }
                }
                
            ]
        ]
        options.sassOptions = {
            includePaths: [path.join(__dirname, 'styles')],
        }
        
        options.typescript = {
            transpileOnly: true // same as ts-node --transpile-only
         }

        return config;
    },
};


module.exports = NextAppConfig;