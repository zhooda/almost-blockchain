/*
block and blockchain classes in JS

*/
const sha256 = require('./sha256').sha256

class Block {
	// index is location on block chain
	// timestamp is time+date block was created
	// data is any data of transaction held in block
	// previous hash is hash of previous block to ensure
	// integrity of the blockchain
	constructor(index, data, previousHash = '') {
		this.index = index
		this.timestamp = Date.now()
		this.data = data
		this.previousHash = previousHash
		this.hash = this.calculateHash()
		this.nonce = 0
	}

	// method to calculate block hash
	calculateHash() {
		return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString()
	}

	mineBlock(difficulty) {
		while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
			this.nonce++
			this.hash = this.calculateHash()
			// console.log("Nonce: " + this.nonce)
		}

		console.log("Block mined " + this.hash)
	}
}

class Blockchain {
	constructor() {
		this.chain = [this.createGenesisBlock()]
		this.difficulty = 4

	}

	createGenesisBlock() {
		return new Block(0, Date.now(), "Genesis block", "0")
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1]
	}

	addBlock(newBlock) {
		newBlock.previousHash = this.getLatestBlock().hash
		newBlock.mineBlock(this.difficulty)
		this.chain.push(newBlock)
	}

	isChainValid() {
		for(let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i]
			const previousBlock = this.chain[i-1]

			if(currentBlock.hash !== currentBlock.calculateHash()) {
				return false
			}

			if(currentBlock.previousHash !== previousBlock.hash) {
				return false
			}

		}

		return true
	}
}

exports.Block = Block
exports.Blockchain = Blockchain