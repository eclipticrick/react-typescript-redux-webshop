const proxy = require('http-proxy-middleware');

console.log('PROXY HAS BEEN SET UP');

module.exports = function(app) {
    app.use('/postcode', proxy({
        target: 'http://json.api-postcode.nl',
        pathRewrite: { '^/postcode': '' },
        changeOrigin: true,
        logLevel: 'debug',
    }));
};



/*
'/postcode': {
    target: 'http://json.api-postcode.nl',
    pathRewrite: { '^/postcode': '' },
    changeOrigin: true,
    logLevel: 'debug',
},
 */
