const RPC_URL = require('./config').RPC_URL
const RPC_USER = require('./config').RPC_USER
const RPC_PASS = require('./config').RPC_PASS
const RPC_BATCHSIZE = require('./config').RPC_BATCHSIZE
const RPC_CONCURRENT = require('./config').RPC_CONCURRENT

module.exports = require('yajrpc/qup')({
  url: RPC_URL,
  user: RPC_USER,
  pass: RPC_PASS,
  batch: RPC_BATCHSIZE,
  concurrent: RPC_CONCURRENT
})
