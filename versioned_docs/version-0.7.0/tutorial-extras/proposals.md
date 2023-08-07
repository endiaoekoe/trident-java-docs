---
sidebar_position: 9
---

# Proposals

## getProposalById

Query proposal based on ID.  

####  Usage

```
getProposalById(id)
```

####  Parameter

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| id        | String | proposal id |

####  Return

Object -Proposal object.  An IllegalException is thrown when it fails to get a proposal.

####  Example

```
wrapper.getProposalById("15");
```

Execution result:

```
proposal_id: 15
  proposer_address: "A\fLd \037f\243\'\031\317\232\264\346\364\256\3263\vH\275"
  parameters {
    key: 0
    value: 800000
  }
  expiration_time: 1582011000000
  create_time: 1582010070000
  approvals: "A\fLd \037f\243\'\031\317\232\264\346\364\256\3263\vH\275"
  state: DISAPPROVED
```

## proposalCreate

Create a proposal.  

####  Usage

```
proposalCreate(String ownerAddress,HashMap<Long,Long> parameters)
```

####  Parameter

| Parameter    | Type                | Description                                         |
| :----------- | :------------------ | :-------------------------------------------------- |
| ownerAddress | String              | owner address                                       |
| parameters   | HashMap\<Long,Long> | Parameters proposed to be modified and their values |

####  Return

Object -Proposal object.  An IllegalException is thrown when it fails to get a proposal.

####  Example

```
        HashMap<Long, Long> parameters = new HashMap<Long, Long>();
        parameters.put(1L, 2L);
        parameters.put(0L, 100000L);

        TransactionExtention txnExt = client.proposalCreate("41C9B9110BD5F6697075659AB3AAF6107840A9D96D",parameters);
        Transaction signedTxn = client.signTransaction(txnExt);
        TransactionReturn ret = client.blockingStub.broadcastTransaction(signedTxn);

```

Execution result:

```
90b1738e0ead46e52f1550d7e5b619136ecf715cc43a728737b86b1a5bf633a3
```

## approveProposal

Approve a proposal.  

####  Usage

```
approveProposal(String ownerAddress,long proposalId,boolean isAddApproval)
```

####  Parameter

| Parameter     | Type    | Description                        |
| :------------ | :------ | :--------------------------------- |
| ownerAddress  | String  | owner address                      |
| proposalId    | Long    | Proposal id                        |
| isAddApproval | Boolean | Whether to agree with the proposal |

####  Return

Object -Proposal object.  An IllegalException is thrown when it fails to get a proposal.

####  Example

```
        TransactionExtention txnExt = client.approveProposal("41C9B9110BD5F6697075659AB3AAF6107840A9D96D",1,true);
        Transaction signedTxn = client.signTransaction(txnExt);
        TransactionReturn ret = client.blockingStub.broadcastTransaction(signedTxn);
```

Execution result:

```
90b1738e0ead46e52f1550d7e5b619136ecf715cc43a728737b86b1a5bf633a3
```

## deleteProposal

Delete a proposal.  

####  Usage

```
deleteProposal(String ownerAddress,long proposalId)
```

####  Parameter

| Parameter    | Type   | Description   |
| :----------- | :----- | :------------ |
| ownerAddress | String | owner address |
| proposalId   | Long   | Proposal id   |

####  Return

Object -Proposal object.  An IllegalException is thrown when it fails to get a proposal.

####  Example

```
        TransactionExtention txnExt = client.deleteProposal("41C9B9110BD5F6697075659AB3AAF6107840A9D96D",1);
        Transaction signedTxn = client.signTransaction(txnExt);
        TransactionReturn ret = client.blockingStub.broadcastTransaction(signedTxn);
```

Execution result:

```
90b1738e0ead46e52f1550d7e5b619136ecf715cc43a728737b86b1a5bf633a3
```