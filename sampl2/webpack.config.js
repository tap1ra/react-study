const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: ["./src/index.ts"]
  },
  output: {
    path: path.join(__dirname, "dist/public"),
    filename: "[name]-local.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      ie: "10",
                      safari: "9.0",
                      ios: "9.0",
                      android: "4.0"
                    }
                  }
                ],
                "@babel/preset-react",
                "@babel/preset-typescript"
              ],
              plugins: [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        ]
      }
    ]
  }
};
