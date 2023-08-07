---
sidebar_position: 2
---

# Deploying a Smart Contract

Trident-Java allows you to deploy a smart contract by ABI and bytecode.

## Compile the Smart Contract

Compilation to bytecode is performed by the Solidity compiler, `solc`. 

To compile the Solidity code run:

```shell
$ solc <contract>.sol --bin --abi --optimize -o <output-dir>/
```

The `--bin` and `--abi` compiler arguments are both required to deploy your smart contract with Trident-Java.

## Deploy the Smart Contract

The smart contract is ready to be deployed with the compiled ABI and bytecode:

```java
ApiWrapper wrapper = ApiWrapper.ofMainnet("hex private key");
String byteCode = "bytecode";
String abi = "ABI";
Contract cntr = new Contract.Builder()
                        .setOwnerAddr(c.parseAddress("address"))
                        .setOriginAddr(c.parseAddress("address"))                
     .setBytecode(ByteString.copyFrom(Numeric.hexStringToByteArray(bytecode)))
                                    .setAbi(abi)
                                    // .setCallValue()
                                    // .setName()
                                    // .setConsumeUserResourcePercent()
                                    // .setOriginEnergyLimit()
                                    .build();
cntr.setWrapper(c);
TransactionBuilder builder = cntr.deploy();
```

> 📘 Call value
> 
> An error will occur if passing a call value to a non-payable constructor.

## Deploy with Params

Take this simple contract as an example:

```javascript solidity
//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract test {
    uint256 public param;
    
    constructor (uint256 p) {
        param = p;
    }
    
    function t () public returns (uint256) {
        param += 1;
        return param;
    }
}
```

Set the initial value for `param`: 

```java
List params = new ArrayList<Type>(); 
params.add(new Uint256(15));
//deploy with param
cntr.deploy(params);
```

Trident-Java will return the transaction hash after a successful broadcast.