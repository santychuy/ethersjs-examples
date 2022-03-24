const dotenv = require('dotenv');
const { ethers } = require('ethers');

//Get past events
(async () => {
  dotenv.config();

  const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_API_MAINNET);
  const daiAddressContract = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

  const dai_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
  ];

  const daiContract = new ethers.Contract(daiAddressContract, dai_ABI, provider);

  const latestBlock = await provider.getBlockNumber();

  const transferEvent = await daiContract.queryFilter('Transfer', latestBlock - 5, latestBlock);

  console.log(transferEvent);
})()