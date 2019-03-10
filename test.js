const { GetAndVerify, GetProof, VerifyProof } = require('eth-proof')
const { Account, Header, Log, Proof, Receipt, Transaction } = require('eth-object')
const { keccak, encode, decode, toBuffer, toHex, toWord, mappingAt } = require('./utils')

// let getAndVerify = new GetAndVerify("http://3.120.235.185:8545")
let getProof = new GetProof("http://3.120.235.185:8545");

let randomAdds = "0x977f2b5e59c9f432fecebf2cc760e93a3630bdc7"
let accountAddress = "0x387ac0218758868AC1472Ef483ca73fA21B470eb"
let blockHash = "0x789d93edb6cfc4abc61ca3fd2fcd815e54ef12866f0c6efa831b14758486d2b6"

let prf

getProof.accountProof(randomAdds, blockHash)
  .then((r) => {
    prf = r
    console.log(prf)
  })
  .catch((e) => {
    console.log(e)
  })

VerifyProof.
//
// getProof.storageProof(accountAddress, "0x00", blockHash)
//   .then((r) => {
//     let prf = new Proof(r)
//     console.log(prf)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

//
// async() => {
//   let prf = await getProof.storageProof(randomAdds, storageAddress, blockHash = null)
//   console.log(prf)
// }

//
// let position = '0x0'
// let data = ""
// getAndVerify.storageAgainstBlockHash(accountAddress, position, blockHash)
//   .then((r) => {
//     console.log(toHex(r))
//   })
//   .catch((e) => {
//     console.log(e)
//   })

console.log('xx')
