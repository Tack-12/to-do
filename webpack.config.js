const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins:[
        new htmlWebPackPlugin({
            template: "./src/template.html",
        }),
    ]
}