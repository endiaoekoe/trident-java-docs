---
sidebar_position: 1
---

# Release Note v0.6.0


Since Java-tron gRPC APIs are updated, in this version, Trident needs to optimize the code structure to keep compatibility with Java-tron. The parameters type of interfaces freezeBalance and updateAsset have been updated, so please remember to modify the type of the parameters when using corresponding interfaces. 

In the previous version, a NoClassDefFound exception would be thrown when importing trident.jar on the Android platform. This upgrade supports the Android platform and eliminates the exception message so that Android developers can implement Trident in their projects.

**Core**:

- Optimize code structure
- Support Android platform
- Add more java-tron gRPC APIs, as below,

  - getTransactionListFromPending: get the transaction list from the pending pool
  - getPendingSize: get the size of the queue in the pending pool
  - getTransactionFromPending: get transaction details from the pending pool
  - getBlockById: query block information by block hash
  - getNextMaintenanceTime: get the next maintenance period time
  - getBurnTRX: query the amount of TRX burned on the chain
  - getBlockBalance: get all balance change operations of a block.
  - createWitness: create a witness address
  - updateWitness: modify the official website URL of the witness
  - withdrawBalance: withdraw the reward in the balance
  - proposalCreate: create a proposal
  - approveProposal: approve a proposal
  - deleteProposal: delete a proposal