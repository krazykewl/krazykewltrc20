const env = process.env.PATH_TYPE;

let interfaceData = {
}

switch (env) {
  case "pro":
    interfaceData = {
      mainOptions: {
        fullNode: 'http://fullnode.tron.network',
        solidityNode: 'http://solidity.tron.network',
        eventServer: 'http://fullnode.tron.network'
      },
      sideOptions: {
        fullNode: 'http://fullnode.sun.network',
        solidityNode: 'http://solidity.sun.network',
        eventServer: 'http://47.252.84.141:8080'  
      },
      mainGatewayAddress: 'TGHxhFu4jV4XqMGmk3tEQdSeihWVHE9kBP',
      sideGatewayAddress: 'TBHr5KpbA7oACUysTKxHiAD7c6X6nkZii1',
      chainId: '41455cb714d762dc46d490eab37bba67b0ba910a59',

      SERVER_API: 'https://api.trondice.org',

      TRON_GRID: "https://api.trongrid.io", 
      contractAddress: "TKwqhYfr7bzWy1aGBHziUeJJ4jWq7g5kPj",
      
      trx20ContractAddress: 'THvZvKPLHKLJhEFYKiyqj6j8G8nGgfg7ur',
      
    }
    break;
  default:
    interfaceData = {
      mainOptions: {
        fullNode: 'http://fullnode.tron.network',
        solidityNode: 'http://solidity.tron.network',
        eventServer: 'http://fullnode.tron.network'
      },
      sideOptions: {
        fullNode: 'http://fullnode.sun.network',
        solidityNode: 'http://solidity.sun.network',
        eventServer: 'http://fullnode.sun.network'  
      },
      mainGatewayAddress: 'TGHxhFu4jV4XqMGmk3tEQdSeihWVHE9kBP',
      sideGatewayAddress: 'TBHr5KpbA7oACUysTKxHiAD7c6X6nkZii1',
      chainId: '41455cb714d762dc46d490eab37bba67b0ba910a59',

      SERVER_API: 'http://47.90.249.61:9083',
      TRON_GRID: "http://47.90.249.61:8099",
      contractAddress: "TTf9gnpgfqzqYHyfN6U5vb1dqwozcNzfR6",
      
      trx20ContractAddress: 'TBos486x5HXuf6RGSWmc2acrxMT78gaAgP',
    }
    break;
}
export default interfaceData;
