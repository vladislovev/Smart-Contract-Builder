const hre = require("hardhat");

/**
 * Вопросы к Павлу:
 * 1. Что делать с этими параметрами??? @param {constructor params} params - их же много
*/


/**
 * compile and deploy contract from contracts folder
 * @param {File name of contract: string} contract_name 
 * @param {constructor params} params - constructor(string memory something, etc) {}
 * @param {File name of contract} contract_name 
 */
async function compile_deploy(contract_name, params) {
  
  await hre.run('compile');

  const contract = await hre.ethers.getContractFactory(contract_name);
  const contract_name = await contract.deploy(params);

  await contract_name.deployed();

  console.log(`${contract_name} deployed address:`, contract_name.address);
}


/** Вызов функции
 * compile_deploy()
      .then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
 */
