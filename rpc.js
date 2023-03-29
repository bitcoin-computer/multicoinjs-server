const { RPC_URL, RPC_USER, RPC_PASS, RPC_BATCHSIZE, RPC_CONCURRENT } = require('./config')

module.exports = require('yajrpc/qup')({
  url: RPC_URL,
  user: RPC_USER,
  pass: RPC_PASS,
  batch: RPC_BATCHSIZE,
  concurrent: RPC_CONCURRENT
})
