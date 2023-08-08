---
sidebar_position: 1
---

# Release Note v0.4.0


The main updates are to support Stake 2.0 mechanism. The staking, unstaking, and delegating query APIs are updated. Three resource management-related APIs are added to utilize the resources more flexibly and conveniently. Since the unstaking and TRX withdrawal mechanism is changed, another three APIs are integrated to implement these new functions. For more detail on Stake 2.0, please refer to <https://medium.com/tronnetwork/what-is-stake-2-0-e04f59b948a6>  

**Core**:
- freezebalancev2: stake TRX to obtain TRON Power and a specified type of resource (bandwidth or energy)  
- unfreezebalancev2: unstake TRX to release resource and TRON Power obtained with all corresponding votes revoked  
- getdelegatedresourcev2: query the detail of resource delegated between two addresses  
- getdelegatedresourceaccountindexv2: query the resource delegating index of an address  
- delegateresource: delegate resources to an address  
- undelegateresource: undelegate resource API  
- getcandelegatedmaxsize: query the amount of delegatable resources of a type  
- withdrawexpireunfreeze: API used to withdraw unstaked TRX  
- getavailableunfreezecount: inquiry API for the remaining times of unstaking  
- getcanwithdrawunfreezeamount: query the withdrawable balance of a specific timestamp