require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_URL = process.env.API_URL;
const privateKeys =
   "yEmETP_PBNMnWbuWnUmmC2mwYNIodMBH";
const goerliApiKey = process.env.GOERLI_API_KEY;
// const mumbaiApiKey =
//   "https://polygon-mainnet.g.alchemy.com/v2/yEmETP_PBNMnWbuWnUmmC2mwYNIodMBH";
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost:{
      url: "http://127.0.0.1:7545"
    },
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};
