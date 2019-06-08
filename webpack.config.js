const path = require('path');

module.exports = {
    entry: './resources/js/app.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'static')
    }
};
