// D:\enviromentDev\Proyects\node\22\TestGradiW\src\webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/js/app.js',
    'css/index': './src/scss/index.scss',
    'css/header/style': './src/scss/header/style.scss',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js', // genera app.js, index.js, header.js (pero son vacíos en index/header)
    clean: true, // limpia el folder public antes de compilar
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // ⚠️ reemplaza style-loader
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // genera app.css, index.css, header.css
    }),
  ],
  mode: 'development',
};