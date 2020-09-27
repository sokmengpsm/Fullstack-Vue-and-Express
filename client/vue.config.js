const path = require('path');

// use devServer want to go it directly and outputDir when build want it to put in server and name public
module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer:{
        proxy: {
            '/api': {
                target: 'http://localhost:5000'
            }
        }
    }
}