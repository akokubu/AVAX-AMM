/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { AMM, AMMInterface } from "../../../contracts/ERC20Tokens.sol/AMM";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenX",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_tokenY",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "PRECISION",
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
        internalType: "contract IERC20",
        name: "_inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "getEquivalentToken",
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
        internalType: "contract IERC20",
        name: "_tokenX",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountX",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_tokenY",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountY",
        type: "uint256",
      },
    ],
    name: "provide",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "share",
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
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "totalAmount",
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
    name: "totalShare",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620013bf380380620013bf83398181016040528101906200003791906200013e565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000185565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f282620000c5565b9050919050565b60006200010682620000e5565b9050919050565b6200011881620000f9565b81146200012457600080fd5b50565b60008151905062000138816200010d565b92915050565b60008060408385031215620001585762000157620000c0565b5b6000620001688582860162000127565b92505060206200017b8582860162000127565b9150509250929050565b61122a80620001956000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063026c4207146100675780631877bb5c146100855780633279081a146100b5578063a37230ae146100e5578063aaf5eb6814610115578063d72b9da214610133575b600080fd5b61006f610163565b60405161007c9190610b76565b60405180910390f35b61009f600480360381019061009a9190610bf4565b610169565b6040516100ac9190610b76565b60405180910390f35b6100cf60048036038101906100ca9190610c8b565b610181565b6040516100dc9190610b76565b60405180910390f35b6100ff60048036038101906100fa9190610cf2565b6107d5565b60405161010c9190610b76565b60405180910390f35b61011d6109ae565b60405161012a9190610b76565b60405180910390f35b61014d60048036038101906101489190610d32565b6109b5565b60405161015a9190610b76565b60405180910390f35b60025481565b60036020528060005260406000206000915090505481565b60008483600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148061022c575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b61026b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026290610dbc565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806103125750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610351576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034890610dbc565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036103bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b690610e28565b60405180910390fd5b60008611610402576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f990610e94565b60405180910390fd5b60008411610445576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043c90610e94565b60405180910390fd5b6000806002540361046757620f424060646104609190610ee3565b9050610567565b6000600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054886002546104b79190610ee3565b6104c19190610f54565b90506000600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054876002546105139190610ee3565b61051d9190610f54565b9050808214610561576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055890610ff7565b60405180910390fd5b81925050505b600081116105aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a190611089565b60405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff166323b872dd33308a6040518463ffffffff1660e01b81526004016105e7939291906110b8565b6020604051808303816000875af1158015610606573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062a9190611127565b508573ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b8152600401610668939291906110b8565b6020604051808303816000875af1158015610687573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ab9190611127565b5086600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106fb9190611154565b9250508190555084600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107519190611154565b92505081905550806002600082825461076a9190611154565b9250508190555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107c09190611154565b92505081905550809350505050949350505050565b6000806002541161081b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610812906111d4565b60405180910390fd5b8260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806108c35750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610902576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f990610dbc565b60405180910390fd5b600061090d856109cd565b9050600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461099a9190610ee3565b6109a49190610f54565b9250505092915050565b620f424081565b60046020528060005260406000206000915090505481565b60008160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610a775750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610ab6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aad90610dbc565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b3357600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150610b57565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505b50919050565b6000819050919050565b610b7081610b5d565b82525050565b6000602082019050610b8b6000830184610b67565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bc182610b96565b9050919050565b610bd181610bb6565b8114610bdc57600080fd5b50565b600081359050610bee81610bc8565b92915050565b600060208284031215610c0a57610c09610b91565b5b6000610c1884828501610bdf565b91505092915050565b6000610c2c82610bb6565b9050919050565b610c3c81610c21565b8114610c4757600080fd5b50565b600081359050610c5981610c33565b92915050565b610c6881610b5d565b8114610c7357600080fd5b50565b600081359050610c8581610c5f565b92915050565b60008060008060808587031215610ca557610ca4610b91565b5b6000610cb387828801610c4a565b9450506020610cc487828801610c76565b9350506040610cd587828801610c4a565b9250506060610ce687828801610c76565b91505092959194509250565b60008060408385031215610d0957610d08610b91565b5b6000610d1785828601610c4a565b9250506020610d2885828601610c76565b9150509250929050565b600060208284031215610d4857610d47610b91565b5b6000610d5684828501610c4a565b91505092915050565b600082825260208201905092915050565b7f546f6b656e206973206e6f7420696e2074686520706f6f6c0000000000000000600082015250565b6000610da6601883610d5f565b9150610db182610d70565b602082019050919050565b60006020820190508181036000830152610dd581610d99565b9050919050565b7f546f6b656e732073686f756c6420626520646966666572656e74210000000000600082015250565b6000610e12601b83610d5f565b9150610e1d82610ddc565b602082019050919050565b60006020820190508181036000830152610e4181610e05565b9050919050565b7f416d6f756e742063616e6e6f74206265207a65726f2100000000000000000000600082015250565b6000610e7e601683610d5f565b9150610e8982610e48565b602082019050919050565b60006020820190508181036000830152610ead81610e71565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610eee82610b5d565b9150610ef983610b5d565b9250828202610f0781610b5d565b91508282048414831517610f1e57610f1d610eb4565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f5f82610b5d565b9150610f6a83610b5d565b925082610f7a57610f79610f25565b5b828204905092915050565b7f4571756976616c656e742076616c7565206f6620746f6b656e73206e6f74207060008201527f726f76696465642e2e2e00000000000000000000000000000000000000000000602082015250565b6000610fe1602a83610d5f565b9150610fec82610f85565b604082019050919050565b6000602082019050818103600083015261101081610fd4565b9050919050565b7f41737365742076616c7565206c657373207468616e207468726573686f6c642060008201527f666f7220636f6e747269627574696f6e21000000000000000000000000000000602082015250565b6000611073603183610d5f565b915061107e82611017565b604082019050919050565b600060208201905081810360008301526110a281611066565b9050919050565b6110b281610bb6565b82525050565b60006060820190506110cd60008301866110a9565b6110da60208301856110a9565b6110e76040830184610b67565b949350505050565b60008115159050919050565b611104816110ef565b811461110f57600080fd5b50565b600081519050611121816110fb565b92915050565b60006020828403121561113d5761113c610b91565b5b600061114b84828501611112565b91505092915050565b600061115f82610b5d565b915061116a83610b5d565b925082820190508082111561118257611181610eb4565b5b92915050565b7f5a65726f206c6971756964697479000000000000000000000000000000000000600082015250565b60006111be600e83610d5f565b91506111c982611188565b602082019050919050565b600060208201905081810360008301526111ed816111b1565b905091905056fea2646970667358221220ecc8544c8c529eda5e1d0b595fe2b4e5bbef73cf115c93e1bfe0f8e4699f498c64736f6c63430008110033";

type AMMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AMMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AMM__factory extends ContractFactory {
  constructor(...args: AMMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenX: PromiseOrValue<string>,
    _tokenY: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AMM> {
    return super.deploy(_tokenX, _tokenY, overrides || {}) as Promise<AMM>;
  }
  override getDeployTransaction(
    _tokenX: PromiseOrValue<string>,
    _tokenY: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenX, _tokenY, overrides || {});
  }
  override attach(address: string): AMM {
    return super.attach(address) as AMM;
  }
  override connect(signer: Signer): AMM__factory {
    return super.connect(signer) as AMM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AMMInterface {
    return new utils.Interface(_abi) as AMMInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AMM {
    return new Contract(address, _abi, signerOrProvider) as AMM;
  }
}
