pragma solidity ^0.5.0;

import "./MerkleProof.sol";

contract OGCheck is MerkleProof {
    bytes32 public stateroot;
//    mapping (bytes32 => bool) allowedStates;
    mapping (address => bool) authorized;

    event userAuthorized(address);

    constructor(bytes32 _stateroot){
        stateroot = _stateroot;
    }

    function authSelf(bytes32[] memory proof) public {
    //        require(allowedStates[root], "Unsupported state"); //TODO: zkus keccak256(msg.sender)
        require(verify(proof, stateroot, msg.sender), "Key not reputable enough for given state");
        authorized[msg.sender] = true;
        emit userAuthorized(msg.sender);
    }

    function isAuth() public pure returns (bool) {
        return authorized[msg.sender];
    }
}
