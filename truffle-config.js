const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "syrup whisper abuse spoon park obtain response cram kitten doll spy jazz";



module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545,
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // rinkeby: {
    //   networkCheckTimeout: 100000, 
    //   provider: function() { 
    //    return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/28c6f0e931734350854afac6ffcb5062");
    //   },
    //   network_id: 4,
    //   gas: 4500000,
    //   gasPrice: 10000000000,
    // }
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      // settings: {
      //   optimizer: {
      //     enabled: true,
      //     runs: 200
      //   }
      // }
    }
  }
};
