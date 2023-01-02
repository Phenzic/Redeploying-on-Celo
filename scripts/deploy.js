const hre = require("hardhat");

const main = async () => {
  const CRUDContract = await hre.ethers.getContractFactory("CRUD");
  const CRUD = await CRUDContract.deploy();

  await CRUD.deployed();

  console.log("The CRUD contract was deployed to: ", CRUD.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
