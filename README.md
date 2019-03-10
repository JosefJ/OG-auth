####Steps: 
Run a EIP1186 compatible node (testnet)
```
geth --goerli --rpc --rpcaddr "0.0.0.0"
```

Connect to: 
AWS EC2 instance (temp-goerli) http://3.120.235.185:8545


Get StateRoot: 
`web3.eth.getBlock('latest')`

Publish a OG-auth contract with the desired 'StateRoot'

Generate a Merkle proof using:

`eth-proof`
```
const { GetAndVerify, GetProof, VerifyProof } = require('eth-proof')
let getProof = new GetProof("http://3.120.235.185:8545");
getProof.accountProof(accountAddress, 'latest')
```

Verify the proof in Solidity: 
```

```


##Based on contract participation

Identified contracts:
1) Unicorn tokens: https://etherscan.io/token/0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7
2) Unicorn meat tokens: 0xED6aC8de7c7CA7e3A22952e09C2a2A1232DDef9A
3) TheDAO:
   https://etherscan.io/address/0xbb9bc244d798123fde783fcc1c72d3bb8c189413
4) Devon2 token:
https://etherscan.io/token/0xdd94De9cFE063577051A5eb7465D08317d8808B6
5) 1st Blockparty (KickBack) - "0x7473a821fffc1e75524f9b99d6d4e9a2f9c7b12e":
https://github.com/makoto/blockparty/blob/master/src/components/Data.js


## Thanks to:

Rick Dudley: 
https://twitter.com/AFDudley0 

Simon Jentzsch for EIP 1186:
https://github.com/simon-jentzsch

Pierre Alain: 
https://medium.com/@ouvrard.pierre.alain/merkle-proof-verification-for-ethereum-patricia-tree-48f29658eec

Zac Mitton:
https://github.com/zmitton

Goerli Testnet! 
