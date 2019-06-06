/*
block and blockchain classes in JS

*/
const sha256 = require('./sha256').sha256
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

class Transaction {

    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress
        this.toAddress = toAddress
        this.amount = amount
        this.timestamp = Date.now()
    }

    calculateHash() {
        return sha256(this.fromAddress + this.toAddress + this.amount + this.timestamp).toString()
    }

    signTransaction(signingKey) {

        if (signingKey.getPublic('hex') !== this.fromAddress) {
            throw new Error('You can\'t sign transactions for other wallets')
        }
    
        const hashTx = this.calculateHash()
        const sig = signingKey.sign(hashTx, 'base64')

        this.signature = sig.toDER('hex')
    }

    isValid() {

        if (this.fromAddress === null) return true;

        if (!this.signature || this.signature.length === 0) {
            throw new Error('There\'s no signature in this transaction')
        }

        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex')
        return publicKey.verify(this.calculateHash(), this.signature)
    }
}

class Block {
    // index is location on block chain
    // timestamp is time+date block was created
    // data is any data of transaction held in block
    // previous hash is hash of previous block to ensure
    // integrity of the blockchain
    constructor(timestamp, transactions, previousHash = '') {
        this.previousHash = previousHash
        this.timestamp = timestamp
        this.transactions = transactions
        this.nonce = 0
        this.hash = this.calculateHash()
    }

    // method to calculate block hash
    calculateHash() {
        return sha256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString()
    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++
            this.hash = this.calculateHash()
            // console.log("Nonce: " + this.nonce)
        }

        console.log(`Block mined: ${this.hash}`)
    }

    hasValidTransactions() {
        for (const tx of this.transactions) {
            if (!tx.isValid()) {
                return false
            }
        }

        return true
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
        this.realGenesis = JSON.stringify(this.chain[0])
        this.difficulty = 2
        this.pendingTransactions = []
        this.miningReward = 100

    }

    createGenesisBlock() {
        return new Block(Date.now(), [], '0')
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock)
    }

    minePendingTransactions(miningRewardAddress) {
        const rewardTx = new Transaction(null, miningRewardAddress, this.miningReward)
        this.pendingTransactions.push(rewardTx)

        let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash)
        block.mineBlock(this.difficulty)

        console.log('Block successfully mined.')
        this.chain.push(block)

        this.pendingTransactions = []
    }

    addTransaction(transaction) {
        if (!transaction.fromAddress || !transaction.toAddress) {
            throw new Error('Transaction must include from and to addresses.')
        }

        if (!transaction.isValid()) {
            throw new Error('Cannot add invalid transactions to chain.')
        }

        if (transaction.amount <= 0) {
            throw new Error('Transaction amount should be greater than 0')
        }

        this.pendingTransactions.push(transaction)
    }

    getBalanceOfAddress(address) {
        let balance = 0

        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount
                }

                if (trans.toAddress === address) {
                    balance += trans.amount
                }
            }
        }

        return balance
    }

    getAllTransactionsForWallet(address) {
        const txs = []

        for (const block of this.chain) {
            for (const tx of block.transactions) {
                if (tx.fromAddress === address || tx.toAddress === address) {
                    txs.push(tx)
                }
            }
        }

        return txs
    }

    isChainValid() {
        const realGenesis = JSON.stringify(this.createGenesisBlock())

        if (this.realGenesis !== JSON.stringify(this.chain[0])) {
            return false
        }

        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i]

            if (!currentBlock.hasValidTransactions()) {
                return false
            }

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }

        }

        return true
    }
}

exports.Block = Block
exports.Blockchain = Blockchain
exports.Transaction = Transaction