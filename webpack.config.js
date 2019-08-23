module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "hello.js"
    },
    module: {
        rules: [{
            test : /\.html$/ , 
            use: [ "html-loader" ]
        }]
    }
}