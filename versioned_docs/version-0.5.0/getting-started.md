---
sidebar_position: 1
---

# Quickstart

This page will help you get started with Trident-Java. You'll be up and running in a jiffy!.

> 🚧 Announcement
> 
> Due to the sunset of Bintray & jcenter(refer to [Into the Sunset on May 1st: Bintray, JCenter, GoCenter, and ChartCenter](https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/)), the reference of `jcenter` should be replaced by `mavenCentral`. 
> 
> For security reasons, we will no longer perform packaging and uploading to maven. Please clone and package from [GitHub](https://github.com/tronprotocol/trident.git).

[release note](https://github.com/tronprotocol/trident/releases/tag/0.5.0)

## <b>Overview</b>

trident-java is a lightweight SDK that includes libraries for working with TRON system contracts and smart contracts.

trident-java makes it easy to build TRON applications with Java.

## Install trident-Java

To start using trident-java, firstly you will add the packages as your dependencies.

After cloning the code from GitHub, you need to compile the code first.

Please use Java version 1.8.0_231 and Gradle 5.6.4 to compile and package.

trident-java has set compatibility for jdk8 and can be used as a dependency. You can also add compatibility settings before compiling, located in trident-java/build.gradle, 'subject' item:

```groovy
java {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
        // Add any compatibility 
    }
```

#### <b>Repository settings</b>

> 📘 About third-party dependencies
> 
> Please add third-party libraries that trident uses to your own project.

Add Bintray to Gradle repositories:

```groovy
repositories {
    mavenCentral()
}
```

#### <b>Choose required packages</b>

trident-java includes three packages: 

|              |                                                                                                       |
| :----------- | :---------------------------------------------------------------------------------------------------- |
| <b>abi</b>   | This contains datatypes and ABI encoders/decoders.                                                    |
| <b>core</b>  | This contains the wrapping functions for easily interacting with the TRON system and smart contracts. |
| <b>utils</b> | This contains tools including encryption, conversion, Etc.                                            |

#### <b>Gradle dependencies</b>

trident-java interacts with the TRON network through gRPC, Protobuf & gRPC-related packages are required.

```groovy
dependencies {
    // protobuf & grpc
    implementation 'com.google.protobuf:protobuf-java:3.11.0'
  
    implementation 'io.grpc:grpc-netty-shaded:1.31.0'
    implementation 'io.grpc:grpc-netty:1.31.0'
    implementation 'io.grpc:grpc-protobuf:1.31.0'
    implementation 'io.grpc:grpc-stub:1.31.0'
  
    implementation "org.bouncycastle:bcprov-jdk15on:1.68"

    implementation fileTree(dir:'../core')
    implementation fileTree(dir:'../utils')
    implementation fileTree(dir:'../abi')
    //if you are using the *.jar files, ues the following line
    implementation fileTree(dir:'your path', include: '*.jar')

    implementation 'com.google.guava:guava:28.0-jre'
}
```

#### <b>Maven dependencies</b>

```xml
<dependency>
  <groupId>org.tron.trident</groupId>
  <artifactId>abi</artifactId>
  <version>0.5.0</version>
  <scope>system</scope>
  <systemPath>your path</systemPath>
</dependency>
<dependency>
  <groupId>org.tron.trident</groupId>
  <artifactId>utils</artifactId>
  <version>0.5.0</version>
  <scope>system</scope>
  <systemPath>your path</systemPath>
</dependency>
<dependency>
  <groupId>org.tron.trident</groupId>
  <artifactId>core</artifactId>
  <version>0.5.0</version>
  <scope>system</scope>
  <systemPath>your path</systemPath>
</dependency>
```

## Use trident-java

`ApiWrapper` in the package client is the entrance of the wrapped APIs and smart contract functions.

### <b>Initialize a ApiWrapper Instance</b>

Before using functions in ApiWrapper, you should bind your private key to an ApiWrapper instance:

```java
ApiWrapper wrapper = new ApiWrapper("grpc endpoint", "solidity grpc endpoint", "hex private key");
```

Any node can be used here. Alternatively, there are hardcoded initializers for the main net, Shasta, and Nile test nets:

From version 0.1.1, as TronGrid requires API keys for the main net, an API key should be added to the initialization with ofMainnet.

```java
//main net, using TronGrid
ApiWrapper wrapper = ApiWrapper.ofMainnet("hex private key", "API key");
//Shasta test net, using TronGrid
ApiWrapper wrapper = ApiWrapper.ofShasta("hex private key");
//Nile test net, using a node from Nile official website
ApiWrapper wrapper = ApiWrapper.ofNile("hex private key");
```

> 📘 Private key binding
> 
> Private keys are used for signing transactions. That is, you can use any hexadecimal string that meets the length rule as the private key for data inquiries.

## Javadoc

Functions in `core` are fully equipped with Javadoc. Generate if needed.