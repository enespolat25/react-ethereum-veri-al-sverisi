import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider)


const contractAddress = "your-contract-info"
const contractABI = [
	{
		"inputs": [],
		"name": "myNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_myNumber",
				"type": "uint256"
			}
		],
		"name": "setMyNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const myContract = new web3.eth.Contract(contractABI, contractAddress)
