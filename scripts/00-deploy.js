const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying smart contract...");
  
  // Get the signer accounts
  const [deployer] = await ethers.getSigners();

  // Fetch the contract factory
  const Medical = await ethers.getContractFactory("MedicalRecords");

  // Deploy the contract using the signer account
  const medical = await Medical.connect(deployer).deploy();
  
  // Wait for the contract to be deployed
  await medical.deployed();

  // Log the deployment address
  console.log(`Medical is deployed at address: ${medical.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });