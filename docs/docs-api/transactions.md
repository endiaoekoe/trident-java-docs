---
sidebar_position: 3
---

# Transactions

## Transfer

Transfer TRX. The amount is in SUN.

#####  Usage

```
transfer(fromAddress, toAddress, amount)
```

#### Parameter

| Parameter   | Type   | Description                                        |
| :---------- | :----- | :------------------------------------------------- |
| fromAddress | String | fromAddress is the owner's address                 |
| toAddress   | String | toAddress is the recipient's address               |
| amount      | int    | the amount is the amount of TRX to transfer in sun |

#### Return

TransactionExtention, including execution results.

#### Exception

IllegalException, if fail to transfer.

#### Example

```
TransactionExtention transaction = wrapper.transfer("TLtrDb1udekjDumnrf3EVeke3Q6pHkZxjm", "TP8LKAf3R3FHDAcrQXuwBEWmaGrrUdRvzb", 1_000_000);
Transaction signedTxn = wrapper.signTransaction(transaction);
String ret = wrapper.broadcastTransaction(signedTxn);
```

Execution result：

```
e794b5799adbecd5a82a365d3faed5888e9e99eb7bda2f943e3cc46e77a5da7c
```

## getTransactionSignWeight

Query transaction sign weight.

####  Usage

```
getTransactionSignWeight(txn)
```

####  Parameter

| Parameter | Description        | Type        |
| :-------- | :----------------- | :---------- |
| txn       | Transaction object | Transaction |

####  Return

TransactionSignWeight object.

####  Example

```
TransactionSignWeight transaction = wrapper.getTransactionSignWeight(wrapper.getTransactionById("786c7516df88941e33ea44f03e637bd8c1ddcfd058634574102c6e3cfb93de0d"));
```

Execution result：

```
permission {
    permission_name: "owner"
    threshold: 1
    keys {
      address: "A,\303\3379\362\325AU\361\\\016\213q)Xr5\346\322X"
      weight: 1
    }
  }
  approved_list: "A,\303\3379\362\325AU\361\\\016\213q)Xr5\346\322X"
  current_weight: 1
  result {
  }
  transaction {
    ...
  }
```

## getTransactionApprovedList

Query transaction approvedList.

####  Usage

```
getTransactionApprovedList(txn)
```

####  Parameter

| Parameter | Description        | Type        |
| :-------- | :----------------- | :---------- |
| txn       | Transaction object | Transaction |

####  Return

TransactionApprovedList object.

####  Example

```
TransactionApprovedList transaction = wrapper.getTransactionApprovedList(wrapper.getTransactionById("786c7516df88941e33ea44f03e637bd8c1ddcfd058634574102c6e3cfb93de0d"));
```

Execution result：

```
approved_list: "A,\303\3379\362\325AU\361\\\016\213q)Xr5\346\322X"
  result {
  }
  transaction {
    ...
  }
```

## getTransactionListFromPending

Query the transaction list information from the pending pool.

####  Usage

```
getTransactionListFromPending()
```

####  Parameter

none

####  Return

TransactionIdList object.

####  Example

```
TransactionIdList transactionIdList = wrapper.getTransactionListFromPending();
```

Execution result：

```
txId: [
  "f125056e24e9d674464a7599f79b0dae60ed23209cde25dec3b6e0f1d45ce83a",
  "d26f0ba8e61e71cf7fff641fd560d1ff4e4f67c224cfae34c8b389cfb89a0684"
]
```

## getTransactionFromPending

Query transaction details from the pending pool.

####  Usage

```
getTransactionFromPending(txId)
```

####  Parameter

| Parameter | Description                            | Type   |
| :-------- | :------------------------------------- | :----- |
| txId      | Transaction hash, i.e. transaction id. | String |

####  Return

Transaction object.

####  Example

```
Transaction transaction  = client.getTransactionFromPending(txId);
```

Execution result：

```
raw_data {
    ref_block_bytes: "T("
    ref_block_hash: "\236\255\354O\002\260\333\266"
    expiration: 1606991088000
    contract {
      type: TriggerSmartContract
      parameter {
        type_url: "type.googleapis.com/protocol.TriggerSmartContract"
        value: "\n\025A,\303\3379\362\325AU\361\\\016\213q)Xr5\346\322X\022\025A \343\347\200\310\016\373\362#\310\371\266\334\310\f\016\336\v\033\345\"\244\002\365W#Z\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000 \000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\316{\'\346\270\270\346\210\217\347\274\226\345\217\267\':\'GN001208300ZK\',\'\346\270\270\346\210\217\345\271\263\345\217\260\':\'AG\346\227\227\350\210\260\345\216\205\',\'\346\270\270\346\210\217\347\261\273\345\236\213\':\'\347\231\276\345\256\266\344\271\220\',\'\346\270\270\346\210\217\347\273\223\346\236\234\':\'\345\272\2048\351\227\2623\',\'\345\210\233\345\273\272\346\227\266\351\227\264\':\'Mon Aug 31 01:55:24 PST 2020\',\'\346\210\252\346\255\242\346\227\245\346\234\237\':\'Mon Aug 31 01:55:49 PST 2020\'}\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000"
      }
    }
    timestamp: 1606991030518
    fee_limit: 1000000
  }
  signature: "\271\325\213%\214\256\316\3778\304\206m\346\363!h\355i\374\304\212\337\332\227\032\271\363\261\300\262\362*S\306\272{\027\264\003\302\271\335)\210\017\360\243\"\216\325\335\333\360Wu\2265\205y\356\336\344F\000\001"
  ret {
    contractRet: SUCCESS
  }
```


## getPendingSize

Query the size of the queue in the pending pool.

####  Usage

```
getPendingSize()
```

####  Parameter

none

####  Return

long - size of the queue in the pending pool

####  Example

```
long pendingSize = wrapper.getPendingSize();
```

Execution result：

```
{
  "pendingSize": 0
}
```

## estimateBandwidth

Calculate the bandwidth of a transaction.

####  Usage

```
estimateBandwidth(Transaction txn)
```

####  Parameter

| Parameter | Description                     | Type        |
| :-------- | :------------------------------ | :---------- |
| txn       | The transaction to be estimated | Transaction |

####  Return

The estimated bandwidth in the type of long.

####  Example

```
long bandwidth = wrapper.estimateBandwidth(signedTxn);
```

Execution result：

```
266
```