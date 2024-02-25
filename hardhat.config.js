require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const PRIVATE_KEY = "d316164b2bcac4d53f5a135a9fc0502ba7080b4f71a08d21d9da37de554c2da5";
const privateKeys =
   "yEmETP_PBNMnWbuWnUmmC2mwYNIodMBH";
const goerliApiKey = process.env.GOERLI_API_KEY;
// const mumbaiApiKey =
//   "https://polygon-mainnet.g.alchemy.com/v2/yEmETP_PBNMnWbuWnUmmC2mwYNIodMBH";
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/zhl2YYMKkscmtMsl3uj1KQzcG6uRzbSA",
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};
