/// almost bitcoin - nodejs server script
/// Zeeshan Hooda
/// 23 May 2019

const { Blockchain, Transaction } = require('./blockchainClasses')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const dhicoin = new Blockchain()
console.log('Blockchain valid?', dhicoin.isChainValid() ? 'Yes' : 'No')

// Returning necessary data?
console.log('Blocks')
for (let i = 0; i < dhicoin.chain.length; i++) {
	console.log(JSON.stringify(dhicoin.chain[i], null, 2))
}
console.log('\n-------------------------\n')
console.log('transactions')
for (let i = 0; i < dhicoin.chain.length; i++) {
	console.log(`Block Index: ${i}`)
	for (let k = 0; k < dhicoin.chain[i].transactions.length; k++) {
		console.log(JSON.stringify(dhicoin.chain[i].transactions[k], null, 2))
	}
	console.log('----------')
}

// Test tampering
// console.log(`Validity: ${dhicoin.isChainValid()}`)
// dhicoin.chain[dhicoin.chain.length - 1].transactions[dhicoin.chain[dhicoin.chain.length - 1].transactions.length - 1].amount = 500
// console.log(`Validity: ${dhicoin.isChainValid()}`)
