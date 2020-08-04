const HDWalletProvider = require ('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'ribbon chest uncle business absent mixed wasp lazy ecology beyond february live',
    'https://rinkeby.infura.io/v3/a388363e194d4944af929138dbaa5d61',
	);
const web3 = new Web3(provider);

//const deploy = async () => {
//   accounts = await web3.eth.getAccounts();

//    console.log('Deploying form', accounts[0]);

//    const result = await new web3.eth.Contract(JSON.parse(interface))
//    .deploy({ data: bytecode, arguments:['Hi there!'] })
//    .send({ gas: '1000000', from: accounts[0] });

//    console.log('Contract deployed to', result.options.address);
//};
//deploy();

//.then(() => {
 //   console.log('handle success here');
 //}).catch((e) => {
 //  console.log('this is error: ', e.message)
 //});
//

async function deploy() {
	try {
		 accounts = await web3.eth.getAccounts();

		 console.log('Deploying form', accounts[0]);

		 const result = await new web3.eth.Contract(JSON.parse(interface))
		 .deploy({ data: bytecode, arguments:['Hi there!'] })
		 .send({ gas: '1000000', from: accounts[0] });

		 console.log('Contract deployed to', result.options.address);
    } catch (err) {
    	  console.log(err)
  }

};

deploy();