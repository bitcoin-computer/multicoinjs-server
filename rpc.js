module.exports = require('yajrpc/qup')({
  url: process.env.RPC_URL || 'http://localhost:19332',
  user: process.env.RPC_USER || 'bcn-admin',
  pass: process.env.RPC_PASS || 'kH4nU5Okm6-uyC0_mA5ztVNacJqZbYd_KGLl6mx722A=',
  batch: process.env.RPCBATCHSIZE || 500,
  concurrent: process.env.RPCCONCURRENT || 16
})
