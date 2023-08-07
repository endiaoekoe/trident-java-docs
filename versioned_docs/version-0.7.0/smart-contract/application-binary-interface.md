---
sidebar_position: 1
---

# Application Binary Interface

The Application Binary Interface(ABI) is a data encoding scheme for working with smart contracts. The types defined in the ABI are the same as those you encounter when writing smart contracts with Solidity.

The `abi` package includes libraries to encode/decode ABIs.

## Decode ABI

Take the function of `function totalSupply() public view returns (uint256)`  as an example:

```java
public BigInteger totalSupply() {
  //Construct the function
        Function totalSupply = new Function("totalSupply",
                Collections.emptyList(), Arrays.asList(new TypeReference<Uint256>() {}));
//call the function
        TransactionExtention txnExt = wrapper.constantCall(Base58Check.bytesToBase58(ownerAddr.toByteArray()), 
                Base58Check.bytesToBase58(cntrAddr.toByteArray()), totalSupply);
        //Convert constant result to human readable text
        String result = Numeric.toHexString(txnExt.getConstantResult(0).toByteArray());
        return (BigInteger)FunctionReturnDecoder.decode(result, totalSupply.getOutputParameters()).get(0).getValue();
      }
```

For JST(decimal: 18), the result is:

```shell
Total Supply: 9900000000000000000000000000
```