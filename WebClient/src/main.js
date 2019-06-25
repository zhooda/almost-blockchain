const { Blockchain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('a5a26417e0459ff220b79d3a6b7fd728baaef0266098c8bb26e918713795ac4a')
const myWalletAddress = myKey.getPublic('hex')

// TEST
let coin = new Blockchain

const tx1 = new Transaction(myWalletAddress, 'public key of someone else', 10)
tx1.signTransaction(myKey)
coin.addTransaction(tx1)

console.log('\nstarting miner...')
coin.minePendingTransactions(myWalletAddress)

console.log('\nbalance of myAddy is', coin.getBalanceOfAddress(myWalletAddress))

// attempt to tamper
console.log('is chain valid:', coin.isChainValid())

coin.chain[1].transactions[0].amount = 1
console.log('is chain valid:', coin.isChainValid())