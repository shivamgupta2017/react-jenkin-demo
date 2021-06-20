const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/external-partners", { target: "https://emoney-dev.citizens.com.mm:19110/" , changeOrigin: true}));
};
