---
sidebar_position: 1
---

# Release Note v0.5.0


In the versions before 0.5.0, transactions are constructed by nodes remotely, through requests. In 0.5.0, instead of requesting nodes to build transactions, transactions are built locally with fetched block header from the nodes. In this way, the transaction could not be intercepted before broadcasting. And getBlockByNum is optimized to return BlockExtension in which blockId value is provided. If you use this API, you need to make changes to be compatible with the optimized return.

**Core**:  
Transaction construction is performed locally  
Optimize getBlockByNum interface