// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 1. **Define the contract.** Name it `MyContract`.
contract MyContract {

    // 2. **State Variables.**
    // Declare a public state variable of type uint256 to store a number.
    uint256 public storedNumber;

    // 3. **Constructor.**
    // The constructor should accept an initial value for `storedNumber` and initialize the state variable.
    constructor(uint256 _initialNumber) {
        // 4. **Initialize the state variable.**
        storedNumber = _initialNumber;
    }

    // 5. **Functions.**
    // Write a function `set` to allow the user to set a new value for `storedNumber`.
    function set(uint256 _number) public {
        storedNumber = _number;
    }

    // 6. **View Function.**
    // Write a view function `get` that returns the value of `storedNumber`.
    function get() public view returns (uint256) {
        return storedNumber;
    }

    // 7. **Inheritance Example.**
    // Create a contract `Animal` with a constructor and a function `speak`.
    contract Animal {
        string public name;

        constructor(string memory _name) {
            name = _name;
        }

        function speak() public pure returns (string memory) {
            return "Some generic animal sound";
        }
    }

    // 8. **Extend `Animal` in `Dog`.**
    // Write a `Dog` contract that inherits from `Animal`.
    // Override the `speak` function to return "Bark".
    contract Dog is Animal {
        constructor(string memory _name) Animal(_name) {}

        function speak() public pure override returns (string memory) {
            return "Bark";
        }
    }

    // 9. **Using Modifiers for Access Control.**
    // Create a modifier `onlyOwner` that restricts access to certain functions.
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender; // Setting the contract creator as the owner.
    }

    // 10. **Function with Modifier.**
    // Use the `onlyOwner` modifier to restrict the access of `setOwner` function.
    function setOwner(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }

    // 11. **Gas Optimization Example.**
    // Function to add two numbers efficiently, using gas optimization practices.
    function add(uint a, uint b) public pure returns (uint) {
        return a + b; // Simple addition using optimized gas usage.
    }

    // 12. **Libraries Example.**
    // Use the SafeMath library (if available) for safe mathematical operations.
    // This prevents overflow/underflow errors.
    library SafeMath {
        function add(uint a, uint b) internal pure returns (uint) {
            uint c = a + b;
            require(c >= a, "SafeMath: addition overflow");
            return c;
        }
    }

    function safeAdd(uint a, uint b) public pure returns (uint) {
        return SafeMath.add(a, b); // Using the SafeMath library to add two numbers.
    }

    // 13. **Event Declaration and Emission.**
    // Declare an event called `Transfer` to log transfers of tokens.
    event Transfer(address indexed from, address indexed to, uint amount);

    // 14. **Emit Event.**
    // Write a function `transfer` that emits the `Transfer` event whenever a transfer occurs.
    function transfer(address _to, uint _amount) public {
        emit Transfer(msg.sender, _to, _amount);
    }

    // 15. **Error Handling.**
    // Use `require`, `assert`, and `revert` to handle errors.

    // `require` Example: Ensure the amount to transfer is valid.
    function transferFunds(address _to, uint _amount) public {
        require(_amount > 0, "Amount must be greater than 0");
        // Proceed with transfer logic
    }

    // `assert` Example: Ensure that the total supply does not decrease unexpectedly.
    uint public totalSupply;

    function updateSupply(uint _newSupply) public {
        uint oldSupply = totalSupply;
        totalSupply = _newSupply;
        assert(totalSupply >= oldSupply);  // Ensure supply can't decrease
    }

    // `revert` Example: Revert if conditions are not met.
    function withdraw(uint amount) public {
        if (amount > balance[msg.sender]) {
            revert("Insufficient funds");
        }
        balance[msg.sender] -= amount;
        msg.sender.transfer(amount);
    }
}
