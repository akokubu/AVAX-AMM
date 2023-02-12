/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  USDCToken,
  USDCTokenInterface,
} from "../../../contracts/ERC20Tokens.sol/USDCToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "faucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f5553444320546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f555344430000000000000000000000000000000000000000000000000000000081525081600390816200008f9190620004b7565b508060049081620000a19190620004b7565b505050620000c03369021e19e0c9bab2400000620000c660201b60201c565b620006b9565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000138576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200012f90620005ff565b60405180910390fd5b6200014c600083836200023360201b60201c565b806002600082825462000160919062000650565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200021391906200069c565b60405180910390a36200022f600083836200023860201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002bf57607f821691505b602082108103620002d557620002d462000277565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200033f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000300565b6200034b868362000300565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000398620003926200038c8462000363565b6200036d565b62000363565b9050919050565b6000819050919050565b620003b48362000377565b620003cc620003c3826200039f565b8484546200030d565b825550505050565b600090565b620003e3620003d4565b620003f0818484620003a9565b505050565b5b8181101562000418576200040c600082620003d9565b600181019050620003f6565b5050565b601f82111562000467576200043181620002db565b6200043c84620002f0565b810160208510156200044c578190505b620004646200045b85620002f0565b830182620003f5565b50505b505050565b600082821c905092915050565b60006200048c600019846008026200046c565b1980831691505092915050565b6000620004a7838362000479565b9150826002028217905092915050565b620004c2826200023d565b67ffffffffffffffff811115620004de57620004dd62000248565b5b620004ea8254620002a6565b620004f78282856200041c565b600060209050601f8311600181146200052f57600084156200051a578287015190505b62000526858262000499565b86555062000596565b601f1984166200053f86620002db565b60005b82811015620005695784890151825560018201915060208501945060208101905062000542565b8683101562000589578489015162000585601f89168262000479565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620005e7601f836200059e565b9150620005f482620005af565b602082019050919050565b600060208201905081810360008301526200061a81620005d8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200065d8262000363565b91506200066a8362000363565b925082820190508082111562000685576200068462000621565b5b92915050565b620006968162000363565b82525050565b6000602082019050620006b360008301846200068b565b92915050565b61142680620006c96000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a35780637b56c2b2146101d357806395d89b41146101ef578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610c97565b60405180910390f35b6100f160048036038101906100ec9190610d52565b61032f565b6040516100fe9190610dad565b60405180910390f35b61010f610352565b60405161011c9190610dd7565b60405180910390f35b61013f600480360381019061013a9190610df2565b61035c565b60405161014c9190610dad565b60405180910390f35b61015d61038b565b60405161016a9190610e61565b60405180910390f35b61018d60048036038101906101889190610d52565b610394565b60405161019a9190610dad565b60405180910390f35b6101bd60048036038101906101b89190610e7c565b6103cb565b6040516101ca9190610dd7565b60405180910390f35b6101ed60048036038101906101e89190610d52565b610413565b005b6101f7610421565b6040516102049190610c97565b60405180910390f35b61022760048036038101906102229190610d52565b6104b3565b6040516102349190610dad565b60405180910390f35b61025760048036038101906102529190610d52565b61052a565b6040516102649190610dad565b60405180910390f35b61028760048036038101906102829190610ea9565b61054d565b6040516102949190610dd7565b60405180910390f35b6060600380546102ac90610f18565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f18565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a6105d4565b90506103478185856105dc565b600191505092915050565b6000600254905090565b6000806103676105d4565b90506103748582856107a5565b61037f858585610831565b60019150509392505050565b60006012905090565b60008061039f6105d4565b90506103c08185856103b1858961054d565b6103bb9190610f78565b6105dc565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61041d8282610aa7565b5050565b60606004805461043090610f18565b80601f016020809104026020016040519081016040528092919081815260200182805461045c90610f18565b80156104a95780601f1061047e576101008083540402835291602001916104a9565b820191906000526020600020905b81548152906001019060200180831161048c57829003601f168201915b5050505050905090565b6000806104be6105d4565b905060006104cc828661054d565b905083811015610511576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105089061101e565b60405180910390fd5b61051e82868684036105dc565b60019250505092915050565b6000806105356105d4565b9050610542818585610831565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361064b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610642906110b0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b190611142565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107989190610dd7565b60405180910390a3505050565b60006107b1848461054d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461082b578181101561081d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610814906111ae565b60405180910390fd5b61082a84848484036105dc565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089790611240565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361090f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610906906112d2565b60405180910390fd5b61091a838383610bfd565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099790611364565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a8e9190610dd7565b60405180910390a3610aa1848484610c02565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0d906113d0565b60405180910390fd5b610b2260008383610bfd565b8060026000828254610b349190610f78565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610be59190610dd7565b60405180910390a3610bf960008383610c02565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c41578082015181840152602081019050610c26565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c6982610c07565b610c738185610c12565b9350610c83818560208601610c23565b610c8c81610c4d565b840191505092915050565b60006020820190508181036000830152610cb18184610c5e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ce982610cbe565b9050919050565b610cf981610cde565b8114610d0457600080fd5b50565b600081359050610d1681610cf0565b92915050565b6000819050919050565b610d2f81610d1c565b8114610d3a57600080fd5b50565b600081359050610d4c81610d26565b92915050565b60008060408385031215610d6957610d68610cb9565b5b6000610d7785828601610d07565b9250506020610d8885828601610d3d565b9150509250929050565b60008115159050919050565b610da781610d92565b82525050565b6000602082019050610dc26000830184610d9e565b92915050565b610dd181610d1c565b82525050565b6000602082019050610dec6000830184610dc8565b92915050565b600080600060608486031215610e0b57610e0a610cb9565b5b6000610e1986828701610d07565b9350506020610e2a86828701610d07565b9250506040610e3b86828701610d3d565b9150509250925092565b600060ff82169050919050565b610e5b81610e45565b82525050565b6000602082019050610e766000830184610e52565b92915050565b600060208284031215610e9257610e91610cb9565b5b6000610ea084828501610d07565b91505092915050565b60008060408385031215610ec057610ebf610cb9565b5b6000610ece85828601610d07565b9250506020610edf85828601610d07565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f3057607f821691505b602082108103610f4357610f42610ee9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f8382610d1c565b9150610f8e83610d1c565b9250828201905080821115610fa657610fa5610f49565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611008602583610c12565b915061101382610fac565b604082019050919050565b6000602082019050818103600083015261103781610ffb565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061109a602483610c12565b91506110a58261103e565b604082019050919050565b600060208201905081810360008301526110c98161108d565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061112c602283610c12565b9150611137826110d0565b604082019050919050565b6000602082019050818103600083015261115b8161111f565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611198601d83610c12565b91506111a382611162565b602082019050919050565b600060208201905081810360008301526111c78161118b565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061122a602583610c12565b9150611235826111ce565b604082019050919050565b600060208201905081810360008301526112598161121d565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112bc602383610c12565b91506112c782611260565b604082019050919050565b600060208201905081810360008301526112eb816112af565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061134e602683610c12565b9150611359826112f2565b604082019050919050565b6000602082019050818103600083015261137d81611341565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006113ba601f83610c12565b91506113c582611384565b602082019050919050565b600060208201905081810360008301526113e9816113ad565b905091905056fea2646970667358221220cdf705ec1169226cfe090107302e1a5de20dd9f1a45f83e6ef09e285c881638b64736f6c63430008110033";

type USDCTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDCTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDCToken__factory extends ContractFactory {
  constructor(...args: USDCTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<USDCToken> {
    return super.deploy(overrides || {}) as Promise<USDCToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): USDCToken {
    return super.attach(address) as USDCToken;
  }
  override connect(signer: Signer): USDCToken__factory {
    return super.connect(signer) as USDCToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDCTokenInterface {
    return new utils.Interface(_abi) as USDCTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): USDCToken {
    return new Contract(address, _abi, signerOrProvider) as USDCToken;
  }
}
