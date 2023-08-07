---
sidebar_position: 4
---

# TRC-20 Contracts

Trident-Java encapsulates standard TRC-20 methods in `core.contract.Trc20Contract`.

For standard TRC-20 methods, refer to [TIP-20](https://github.com/tronprotocol/TIPs/blob/master/tip-20.md).

## Before Start

A `Trc20Contract` instance works with `ApiWrapper`. Refer to Quickstart for instructions on initialization.

Also, the address of the contract and the caller's address are required.

```java
Apiwrapper wrapper = new Apiwrapper(params..);
//Apiwrapper wrapper = Apiwrapper.ofMainnet()/ofShasta()/ofNile()

//This is core.contract.Contract, not from the proto
Contract contract = wrapper.getContract("contract address");
Trc20Contract token = new Trc20Contract(contract, "caller's address", wrapper);
```

## Name

```java
token.name();
```

## Symbol

```java
token.symbol()
```

## Decimals

```java
token.decimals()
```

## TotalSupply

```java
token.totalSupply();
```

## BalanceOf

```java
token.balanceOf("holder address");
```

## Transfer

```java
token.transfer("receiver's address", amount, power, "memo", feeLimit);
```

## TransferFrom

```java
//the method of transferFrom usually works as a withdraw function
token.transferFrom("from address", "receiver's address", amount, power, "memo", feeLimit);
```

## Approve

```java
token.approve("spender's address", amount, power, "memo", feeLimit);
```

## GetAllowance

```java
token.allowance("from address", "spender's address");
```