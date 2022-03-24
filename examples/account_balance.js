const dotenv = require('dotenv');
const { ethers } = require('ethers');

(async () => {
  dotenv.config();

  const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_API_RINKEBY);

  const balance = await provider.getBalance(process.env.WALLET_ADDRESS);

  console.log(`${ethers.utils.formatEther(balance)} ETH`);
})()