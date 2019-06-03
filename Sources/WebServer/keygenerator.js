/*
key generation for signing

*/
const EC = require('elliptic').ec

const ec = new EC('secp256k1')

const key = ec.genKeyPair()
const publicKey = key.getPublic('hex')
const privateKey = key.getPrivate('hex')

console.log()
console.log('Your public key (also your wallet address)\n', publicKey)

console.log()
console.log('Your private key (ensure this is kept a secret)\n', publicKey)