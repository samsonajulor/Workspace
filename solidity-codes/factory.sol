// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;


contract ChildContract {
    string public name;
    address public owner;

    constructor (string memory _name, address _owner) {
        name = _name;
        owner = _owner;
    }
}

// extend the Create ChildContract function to take in an int and create as many contracts as the value of the int..
contract Factory {
    address[] public deployedContracts;

    function CreateChildContract(string memory _name) public {
        ChildContract newChildContract = new ChildContract(_name, msg.sender);

        deployedContracts.push(address(newChildContract));
    }

    function GetChildContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}