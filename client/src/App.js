import React, { Component } from "react";
import { Home } from './containers/Home';
import { Header } from './components/Header';
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import SimpleAuctionContract from "./contracts/SimpleAuction.json";
import getWeb3 from "./getWeb3";

class App extends Component {
  state = { 
    storageValue: 0, 
    web3: null, 
    accounts: null, 
    contract: null,
    isLoggedIn: false,
    currenBid: 0,
    highestBid: 0,
    remainingTime: 0
  };

  leftPaneRef = React.createRef();

  componentDidMount = async () => {
    await this.connectOnLoad()
    await this.loadData()
  };

  runExample = async () => {
    
    const { accounts, contract } =  this.state;
    // Stores a given value, 5 by default.
    
    if(this.state.isLoggedIn) {
      const highestBid = await contract.methods.highestBid().call();
      console.log("RES", highestBid, contract, accounts[0])
      const res = await contract.methods.bid().send({ from: accounts[0], value: parseFloat(highestBid) + 10});
      // Get the value from the contract to prove it worked.
      
      const response = await contract.methods.highestBid().call();
      // Update state with the result.
      this.setState({ highestBid: parseFloat(response) });
    }
  };

  connectOnClick = async () => {
    
    if(this.state.accounts == null) {
      try {
        let accounts =  await window.ethereum.request({
          method: "wallet_requestPermissions",
          params: [
            {
              eth_accounts: {}
            }
          ]
        });
        accounts = accounts[0].caveats[0].value;
        // Get the contract instance.
        
        const [instance, web3] = await this.loadContract(SimpleAuctionContract);
        // store contract and accounts to local storage for persistence
        const highestBid = await instance.methods.highestBid().call();
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        instance.events.HighestBidIncreased()
          .on('data', event => {
            console.log("data", event.returnValues.amount)
            this.setState()
          })
          .on('changed', changed => console.log("changed", changed))
          .on('error', err => {throw err})
          .on('connected', str => console.log("connected", str))
        localStorage.setItem("accounts", JSON.stringify(accounts));
        this.setState({ web3, accounts, contract: instance, highestBid });
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    } else {
      localStorage.removeItem("accounts");
      this.setState({ accounts: null, highestBid: 0 });
      await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {}
          }
        ]
      });
    }
  }

  loadContract = (contract) => 
    new Promise(async (resolve, reject) => {
      try{
        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = contract.networks[networkId];
        const instance = new web3.eth.Contract(
          contract.abi,
          deployedNetwork && deployedNetwork.address,
        );
        resolve([instance, web3]);
      } catch(error) {
        reject(error)
      }
    })
  
  
  connectOnLoad = async () => {
    if(localStorage.getItem("accounts") !== null) {
      const accounts = JSON.parse(localStorage.getItem("accounts"));
      const [instance, web3] = await this.loadContract(SimpleAuctionContract);
      console.log("instance", instance)
      instance.events.HighestBidIncreased()
        .on('data', event => {
          console.log("data", event.returnValues.amount)
          this.setState()
        })
        .on('changed', changed => console.log("changed", changed))
        .on('error', err => {throw err})
        .on('connected', str => console.log("connected", str))
      this.setState({ web3, accounts, contract: instance });
      this.setState({ isLoggedIn: true})
    }
  }

  loadData = async () => {
    const { contract } = this.state;
    // Stores a given value, 5 by default.
    
    if(localStorage.getItem("accounts") !== null){
      try {
      
        // Get the value from the contract to prove it worked.
        const response = await contract.methods.highestBid().call();
        
        // Update state with the result.
        this.setState({ highestBid: response });
  
      } catch(error){
        console.log(error)
      }
    }
    
    
  }

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    const isLoggedIn = this.state.accounts == null ? false : true;

    return (
      <div className="App">
        <Header 
          leftPaneRef={this.leftPaneRef} 
          initWallet={this.connectOnClick} 
          isLoggedIn={isLoggedIn}
        />
        <Home 
          leftPaneRef={this.leftPaneRef} 
          runExample={this.runExample} 
          storageValue={this.state.highestBid}
          isLoggedIn={isLoggedIn}
        />
      </div>
    );
  }
}

export default App;
