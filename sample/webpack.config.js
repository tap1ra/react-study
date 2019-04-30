const path = require("path");

const env = process.env.NODE_ENV;

const config = {
  mode: env || "development",
  target: "node",
  entry: {
    client: [path.resolve(__dirname, "src/client.ts")],
    server: [path.resolve(__dirname, "src/server.ts")]
  },
  output: {
    path: path.resolve(__dirname, "./public/"),
    publicPath: "./public/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
          plugins: [
            "@babel/plugin-transform-runtime",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  }
};

module.exports = config;
