/// almost bitcoin - nodejs server script
/// Zeeshan Hooda
/// 23 May 2019

const bc = require('./blockchainClasses')
const Block = bc.Block
const Blockchain = bc.Blockchain

var coin = new Blockchain()

// coin.addBlock(new Block(1, "05/16/2019", { amount: 4 }))

for(let i = 1; i < 20; i++) {
	coin.addBlock(new Block(i, { amount: i*7.38 }))
}

console.log(coin.chain)