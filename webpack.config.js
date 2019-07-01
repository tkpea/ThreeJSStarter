module.exports = {
    mode: "production",
  
    entry: "./src/scripts/main.js",
    // ファイルの出力設定
    output: {
      path: `${__dirname}/dist`,
      filename: "main.js"
    },
    performance: { hints: false } ,
    devServer: {
        contentBase: `${__dirname}/dist`,
        compress: true,
        port: 1234,
        open: true,
    },    
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env"
                ]
              }
            }
          ]
        },
      // SASS取り込み設定
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }        
      ]
    }
  };