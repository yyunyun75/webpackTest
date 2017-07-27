var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: ['./src/index.js', './src/style.scss'],
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[{
                test: /\.scss$/,
                use: extractSass.extract({
                    use:[{
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            // options:{
                            //     data: '$env: ' +  process.env.NODE_ENV + ';'
                            // }
                        }],
                        fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        extractSass
    ]
};
