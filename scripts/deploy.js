const hre = require("hardhat");
const { ethers, upgrades } = hre;

const { getContracts, saveContract } = require("./utils");

async function main() {
  const network = hre.network.name;

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // impl next deploy upgrades
  // const hotpotToken = await ethers.getContractFactory("hotpotToken");
  // const HPT = await upgrades.deployProxy(hotpotToken, []);
  // await HPT.deployed();
  // await saveContract(network, 'hotpotToken', HPT.address);
  // console.log(`Deployed hotpotToken to ${HPT.address}`);

  // imp deploy hotpotToken
  const hotpotToken = await ethers.getContractFactory("HotpotToken");
  const Token = await hotpotToken.deploy();
  
  console.log("Token address:", Token.address);
  console.log("Completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
