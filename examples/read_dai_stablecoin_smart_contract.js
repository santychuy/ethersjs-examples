const dotenv = require('dotenv');
const { ethers } = require('ethers');

(async () => {
  dotenv.config();

  const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_API_MAINNET);

  // You can use more functions and add it: 
  // https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#readContract
  const dai_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
  ];

  const daiContract = new ethers.Contract('0x6B175474E89094C44Da98b954EedeAC495271d0F', dai_ABI, provider);

  const nameDai = await daiContract.name();
  const symbol = await daiContract.symbol();
  const totalSupply = await daiContract.totalSupply();

  console.log(`The name of this coin is ${nameDai}:${symbol} with a total of ${totalSupply}`);
})()