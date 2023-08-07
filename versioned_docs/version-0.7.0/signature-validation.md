---
sidebar_position: 1
---

# Signature Validation


Trident-Java includes methods for validating the signature's correctness using the transaction id and signature message. These functions are used for verification and validation prior to broadcasting the transaction.

## Principle of the Validation

When the contract owner's address is known, the public key (recover) is reversed via the signed message and the public key is turned to an address. If the address matches the initiator's address, the verification succeeds.

## Function of the Validation

Three parameters are needed:

- Transaction id (transaction hash, obtained by making SHA256 calculation on `Transaction.rawData`) 

- Signature message (`Transaction.signature`)

- Initiator's address (`Transaction.rawData.contract.parameter.ownerAddress`. Please note `parameter` is the instance of `com.google.protobuf.Any` and needs to be `unpack` according to the specific transaction type)

The validation functions accept two types of parameters: `byte[]` or `String` 

```java
//parent function
public static boolean verify(byte[] txid, byte[] signature, byte[] owner)
  
public static boolean verify(String txid, String signature, String owner)
```

These functions return `true` when signatures are valid.