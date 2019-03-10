pragma solidity ^0.5.0;

import "./MerkleProof.sol";

contract OGAuth {
    using MerkleProof for *;
    bytes32 public stateroot;
    //    mapping (bytes32 => bool) allowedStates;
    mapping (address => bool) authorized;

    event userAuthorized(address);

    constructor(bytes32 _stateroot) public {
        stateroot = _stateroot;
    }

    function authSelf(bytes32[] memory proof) public {
        require(MerkleProof.verify(proof, stateroot, keccak256(abi.encode(msg.sender))), "Key not reputable enough for given state");
        authorized[msg.sender] = true;
        emit userAuthorized(msg.sender);
    }

    function isAuth() public view returns (bool) {
        return authorized[msg.sender];
    }
}
