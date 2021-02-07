const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'https://5dsfu6.deta.dev',
    changeOrigin: true,
    pathRewrite: { '^/api': '/' }
  }))
}  
