
pragma solidity ^0.8.9;

contract MyNumberContract {
    uint256 public myNumber = 28;

    function setMyNumber(uint256 _myNumber) public {
        myNumber = _myNumber;
    }
}
