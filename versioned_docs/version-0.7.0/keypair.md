---
sidebar_position: 3
---

# KeyPair


TRON’s signature algorithm is ECDSA, and the selected curve is SECP256K1.

From version 0.1.3, trident-java has implemented a wrapper class for SECP256K1.KeyPair in Core to facilitate the generation of private keys and the conversion of private keys to addresses. This classpath is org.tron.trident.core.key.KeyPair;

- Generate KeyPair

```java
KeyPair keyPair = KeyPair.generate();
```

- Import KeyPair with the private key

```java
KeyPair keyPair = new KeyPair("your private key");
```

- Print Private & Public key

```java
keyPair.toPrivateKey(); //String private key

keyPair.toPublicKey(); //String public key
```

> 🚧 Note
> 
> The public key does not equal address.

- Print Base58Check & Hex address

```java
keyPair.toBase58CheckAddress();

keyPair.toHexAddress();
```

- Use a specific public key to convert to byte\[], Base58Check, or hex address

```java
//the parent function returns byte[]
KeyPair.publicKeyToAddress(SECP256K1.PublicKey pubKey); 
  
KeyPair.publicKeyToBase58CheckAddress(SECP256K1.PublicKey pubKey);
  
KeyPair.publicKeyToHexAddress(SECP256K1.PublicKey pubKey);
```

- Sign

```java
//this function returns the signature message in byte[]
KeyPair.signTransaction(byte[] txid, KeyPair keyPair);
```
