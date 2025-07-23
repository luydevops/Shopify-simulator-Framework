// D:\enviromentDev\Proyects\node\22\TestGradiW\src\webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/app.js',
    'css/index': './src/scss/index.scss',
    'css/icons-cusmton/style': './src/scss/icons-cusmton/style.scss',
    'css/header/style': './src/scss/header/style.scss',
    'js/header/index': './src/js/header/index.js',
    'css/footer/style': './src/scss/footer/style.scss',
    'js/footer/index': './src/js/footer/index.js',
    'css/top-bar/style': './src/scss/top-bar/style.scss',
    // 'js/top-bar/index': './src/js/top-bar/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js', // genera app.js, index.js, header.js (pero son vacíos en index/header)
    clean: true, // limpia el folder public antes de compilar
  },
  module: {
    rules: [
      // Archivos SCSS
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // Archivos CSS normales
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      // Archivos de fuentes o íconos
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // genera app.css, index.css, header.css
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, 'public/assets'),
        },
      ],
    }),
  ],
  mode: 'development',
};