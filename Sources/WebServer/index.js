/// almost bitcoin - nodejs server script
/// Zeeshan Hooda
/// 23 May 2019

const { Blockchain, Transaction } = require('./blockchainClasses')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('bc9319d59feddbdd383722404525d89ad7df1acb53bdd451ddafa5d128a9419f')

const myWalletAddress = myKey.getPublic('hex')

const dhicoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'addy2', 100)
tx1.signTransaction(myKey)
dhicoin.addTransaction(tx1)

// console.log('Blockchain valid?', dhicoin.isChainValid() ? 'Yes' : 'No')

dhicoin.minePendingTransactions(myWalletAddress)

const tx2 = new Transaction(myWalletAddress, 'addy1', 50)
tx2.signTransaction(myKey)
dhicoin.addTransaction(tx2)

dhicoin.minePendingTransactions(myWalletAddress)

console.log()
console.log(`Balance of my wallet is ${dhicoin.getBalanceOfAddress(myWalletAddress)}`)

console.log()
console.log('Blockchain valid?', dhicoin.isChainValid() ? 'Yes' : 'No')

// 
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
