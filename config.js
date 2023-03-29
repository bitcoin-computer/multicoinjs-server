const CHAIN = process.env.CHAIN || 'LTC'
const RPC_URL = process.env.RPC_URL || 'http://localhost:19332'
const RPC_USER = process.env.RPC_USER || 'bcn-admin'
const RPC_PASS =
  process.env.RPC_PASS || 'kH4nU5Okm6-uyC0_mA5ztVNacJqZbYd_KGLl6mx722A='
const RPC_PORT = process.env.PORT || 19332
const RPC_BATCHSIZE = process.env.RPC_BATCHSIZE || 500
const RPC_CONCURRENT = process.env.RPC_CONCURRENT || 16
const INDEXDB = process.env.INDEXDB || './indexd.leveldb'
const ZMQ = process.env.ZMQ || 'tcp://localhost:28332'
const PORT = process.env.PORT || 5001

module.exports = {
  CHAIN,
  RPC_URL,
  RPC_USER,
  RPC_PASS,
  RPC_PORT,
  RPC_BATCHSIZE,
  RPC_CONCURRENT,
  INDEXDB,
  ZMQ,
  PORT
}