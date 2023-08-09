---
sidebar_position: 4
---

# Sending Transactions

Any operation contracting with the TRON network is a transaction. A transaction can be a TRX transfer, stake & unstake, Trigger Smart Contract, Etc.

**Only resource consumption transactions are available to acquire on the chain.**

## The Routine for Sending

A normal routine for sending a transaction is:

```text
Create -> Sign -> Broadcast -> (wait) -> Lookup and get receipt
```

## Create a Transaction

Note: from the v0.5.0 version, change the way of transaction construction from remote to local constructing, which covers most of the transaction-related APIs, and ensure the transaction won’t be maliciously modified before signing when constructing locally.

Each non-query function creates an unsigned transaction locally, for example:

```java
public TransactionExtention transfer(String fromAddress, String toAddress, long amount) throws IllegalException {

        ByteString rawFrom = parseAddress(fromAddress);
        ByteString rawTo = parseAddress(toAddress);

        TransferContract req = TransferContract.newBuilder()
                .setOwnerAddress(rawFrom)
                .setToAddress(rawTo)
                .setAmount(amount)
                .build();
        TransactionExtention txnExt = createTransactionExtention(req, Transaction.Contract.ContractType.TransferContract);

        return txnExt;
    }
```

## Add Extra Parameters

`core.TransactionBuilder` allows you to add or modify parameters before signing, for example:

```java
TransactionBuilder builder = new TransactionBuilder(transaction);
builder.setFeeLimit(100000000L);
builder.setMemo("memo");
//call TransactionBuilder.build() to get a new transaction
builder.build();
```

Note that only smart contract transactions require a fee limit.

## Signing

There are two ways to sign a transaction:

### Sign with the binding private key

Every `ApiWrapper` instance is initiated with a private key(or a hexadecimal string of 64 characters in length). Simply sign a transaction like this:

```java
Transction signedTransaction = wrapper.signTransaction(transaction);
```

### Sign with a specific private key

Regardless of the binding private key, you can use any private key to sign the transaction, like below:

```java
Transaction signedTransaction = wrapper.signTransaction(transaction, SECP256K1.KeyPair);
```

Refer to `org.tron.trident.crypto.SECP256K1` for constructing an `SECP256K1.KeyPair`.

## Broadcast

Transaction hash may change due to any modification to the original transaction (except the signature).  
Transaction hash is re-calculated inside the function of  `ApiWrapper.broadcastTransaction(Transaction txn)` before the transaction is broadcasted.

```java
wrapper.broadcastTransaction(signedTransaction);

//return transaction hash if successfully broadcasted, otherwise the error code
```