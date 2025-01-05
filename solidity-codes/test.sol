// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 1. **Define the contract.** Name it `MyContract`.
contract MyContract {
    uint8 balance8 = 255; // max value is 2^8bits = 256 bytes => 0 to 255
    int8 balance4 = -128; // max value is 2^8bits = 256 bytes => -128 -> 0 -> +127
    uint16 balance16 = 65535; // max value is 2^16 = 65,536 bytes => 0 to 65,535
    uint32 balance32 = 100; // max value is 2^32
    // derive for the rest.
    uint64 balance64 = 100;
    uint128 balance128 = 100;
    uint256 balance256 = 100;
    uint balance = 100; // defaults to 256.
    // 2. **State Variables.**
    // Declare a public state variable of type uint256 to store a number.
    uint256 public storedNumber;
    string public name = "samson";
    uint256 public identity = 1;
    mapping(address => uint) public balances;

    struct User {
    uint id;
    string name;
    // mapping(address => int) data;
    }

    mapping(address => User) public users;

    User public user;
    
    function accessStruct() public returns (User memory) {
        user = User(identity, name);

        users[address(msg.sender)] = user;
        return user;
    }


    

    // 6. **View Function.**
    // Write a view function `get` that returns the value of `storedNumber`.
    function get() public view returns (uint256) {
        return storedNumber;
    }

    

    // 3. **Constructor.**
    // The constructor should accept an initial value for `storedNumber` and initialize the state variable.
    

    // 5. **Functions.**
    // Write a function `set` to allow the user to set a new value for `storedNumber`.
    function set(uint256 _number) public {
        storedNumber = _number;
        // how to access the mapping;
        balances[msg.sender]; // value is 0;
        balances[msg.sender] = 234;
    }
    

    // 9. **Using Modifiers for Access Control.**
    // Create a modifier `onlyOwner` that restricts access to certain functions.
    address public owner;
    
    constructor () {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }


    // 10. **Function with Modifier.**
    // Use the `onlyOwner` modifier to restrict the access of `setOwner` function.
    function setOwner(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }


    // 11. **Gas Optimization Example.**
    // Function to add two numbers efficiently, using gas optimization practices.

    // 12. **Libraries Example.**
    // Use the SafeMath library (if available) for safe mathematical operations.
    // This prevents overflow/underflow errors.


    // 13. **Event Declaration and Emission.**
    // Declare an event called `Transfer` to log transfers of tokens.

    // 14. **Emit Event.**
    // Write a function `transfer` that emits the `Transfer` event whenever a transfer occurs.

    // 15. **Error Handling.**
    // Use `require`, `assert`, and `revert` to handle errors.

    // `require` Example: Ensure the amount to transfer is valid.

    // `assert` Example: Ensure that the total supply does not decrease unexpectedly.


    // `revert` Example: Revert if conditions are not met.
}


    

    // 7. **Inheritance Example.**
    // Create a contract `Animal` with a constructor and a function `speak`.
    contract Animal {
        constructor() {}

        function speak() virtual pure internal returns (string memory) {
            return "dog";
        }
    }


    // 8. **Extend `Animal` in `Dog`.**
    // Write a `Dog` contract that inherits from `Animal`.
    // Override the `speak` function to return "Bark".
    contract Dog is Animal {
        function speak() internal pure override returns (string memory) {
            super.speak();
            return "Bark";
        }
    }
