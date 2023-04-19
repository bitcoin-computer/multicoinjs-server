# NakamotoJS server

This is a functioning [express](https://www.npmjs.com/package/express) HTTP API written using [indexd](https://www.npmjs.com/package/indexd).

This package is a clone of the original repository [regtest-server](https://github.com/bitcoinjs/regtest-server) 
with the addition of support for other UTXOs based blockchains. Currently supports Bitcoin and Litecoin.

* Requires a running `bitcoind` or a `litecoind` node
	* with `-txindex`, and
	* `-rpcauth=${RPC_AUTH}`,
	* `-server`, and
	* ZMQ (`-zmqpubhashtx=tcp://127.0.0.1:30001 -zmqpubhashblock=tcp://127.0.0.1:30001`)
* Change `-rpcworkqueue` from `16` to `32` for increased throughput (in typical scenarios)

Configure your .env file to setup the credentials. You can use the .env.example file as a template.

# Setup wallet (litecoin)
Run `litecoin-cli createwallet "wallet_name"` to create a wallet.
Run `litecoin-cli getnewaddress "" "legacy"` to get a new address.
Run `litecoin-cli generatetoaddress 431 $ADDRESS` to generate 431 blocks.
Run `litecoin-cli getnewaddress "mweb" "mweb"` to get a new mweb address.
Run `litecoin-cli sendtoaddress $MWEBADDRESS 1` to send 1 LTC to the mweb address (mweb activation).
Run `litecoin-cli generatetoaddress 1 $ADDRESS` to generate 1 block on top of the mweb activation.

# Install 
Run `yarn install` to install the dependencies.

# Start
Run `yarn start` to start the server.

# Start through Docker
Move to the docker folder and follow the instructions on the README.md file.

