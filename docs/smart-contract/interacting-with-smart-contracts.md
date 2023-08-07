---
sidebar_position: 3
---

# Interacting with Smart Contracts

## Calling Constant Methods

Constant methods are those that read a value in a smart contract and do not alter the state of the smart contract. In Solidity, methods have the modifiers of `view` or `pure` are constant methods.

To call a method in trident-java, first construct one:

```java

Function name = new Function("name",
                Collections.emptyList(), Arrays.asList(new TypeReference<Utf8String>() {}));
//method name, input params, output params
```

Then, call the method via`ApiWrapper.constantCall`:

```java
TransactionExtention extension = wrapper.constantCall("caller address", "contract address", name);
```

From the v0.7.0 version, support passing param 'callData' instead of the 'Function'  to  constantCall function, so you can call the constantCall like this:

```
        String ownerAddr = "TUMpXGYUs99uQwVV6e9ZaLxGc4KrvbQsFZ";  
        String contractAddr = "TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf";  
        String callData = "70a08231000000000000000000000000a614f803b6fd780986a42c78ec9c7f77e6ded13c";   
        TransactionExtention txnExt = client.constantCallV2(ownerAddr, contractAddr, callData);
```

Finally, decode the `constant result` to human-readable text:

```java
String result = Numeric.toHexString(txnExt.getConstantResult(0).toByteArray());

(String)FunctionReturnDecoder.decode(result, name.getOutputParameters()).get(0).getValue();
```

For USDT, the result should be:

```shell
> Tether USD
```

> 📘 Constant Calls
> 
> Constant calls are not resource consumption transactions.

## Trigger Calls

Trigger calls change the state (compare with constant calls). The first half of trigger calls are the same as constant calls, and signature and broadcast are required. For example:

```java
Function transfer = new Function("transfer",
                Arrays.asList(new Address(destAddr),
                        new Uint256(BigInteger.valueOf(amount).multiply(BigInteger.valueOf(10).pow(decimals)))),
                Arrays.asList(new TypeReference<Bool>() {}));
```

Call this method via`ApiWrapper.triggerCall`:

```java
TransactionBuilder builder = wrapper.triggerCall("caller address", "contract address", transfer);
```

From the v0.7.0 version, support passing param 'callData' instead of the 'Function'  to  triggerCall function, so you can call the triggerCall like this:

```
        String ownerAddr = "TUMpXGYUs99uQwVV6e9ZaLxGc4KrvbQsFZ";  
        String contractAddr = "TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf";  
        String callData = "70a08231000000000000000000000000a614f803b6fd780986a42c78ec9c7f77e6ded13c";   
        TransactionExtention txnExt = client.triggerCallV2(ownerAddr, contractAddr, callData);
```

The rest steps are the same as normal transactions. Refer to Sending Transactions.

> 📘 Fee Limit Setting
> 
> Trigger calls require the setting of `feeLimit`, refer to [Resource Model](https://developers.tron.network/docs/resource-model).