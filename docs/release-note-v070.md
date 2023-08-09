---
sidebar_position: 2
---

# Release Note v0.7.0


The new release 0.7.0 version now allows developers to add customizable gRPC interceptors in ApiWrapper constructor, enabling embedding some customizable interceptor logic (eg: logging/metrics), before the request/after the response, of a gRPC call.

Periander, the latest Java-tron version, has introduced several optimizations to its APIs. The parameters in the interfaces calling smart contracts have been modified and new functions of Stake 2.0 also bring some changes to the APIs.

**Core**:

- Support customizable gRPC interceptors
- Support more java-tron gRPC APIs introduced in the 4.7.2 release as follows:

  - cancelAllUnfreezeV2(): cancel all unstaking transactions in the waiting period.  
  - estimateEnergy (): estimate the energy required to successfully execute a smart contract transaction (parameter is Function)  
  - estimateEnergyV2(): estimate the energy required to successfully execute a smart contract transaction (parameter is callData)  
  - delegateResourceV2(): delegate bandwidth/energy to another account, new parameter lockPeriod is added, and users can specify their lock period.  
  - constantCallV2(): initiate constant contract call, support pass callData.  
  - triggerCallV2(): trigger a smart contract call, support pass callData.