var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var NFT = artifacts.require("./NFT.sol");
var SimpleAuction = artifacts.require("./SimpleAuction.sol");

module.exports = async (deployer) => {
  await deployer.deploy(SimpleAuction);
  await deployer.deploy(SimpleStorage);
  await deployer.deploy(NFT);
};
