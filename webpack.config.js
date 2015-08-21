module.exports = {
  entry: "./app.js",
  output: {
      path: __dirname + '/dist',
      filename: "bundle.js"
  },
  module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=0'},
        { test: /\.css$/, loader: "style!css" }
      ]
  }
};
