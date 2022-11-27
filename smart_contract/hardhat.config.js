//https://eth-goerli.g.alchemy.com/v2/JZdjZM75l_-vo04ngQ8y4lQgkVrR_qzd

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/JZdjZM75l_-vo04ngQ8y4lQgkVrR_qzd",
      accounts: [ '28412e3e3a5cb31159355674b59ef12ef75a8eae142214c7cf70979884180077' ]
    }
  }
}
