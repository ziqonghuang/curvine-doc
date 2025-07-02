---
sidebar_position: 1
---
# Development Guide

## Project Layout
```bash
.
├── build
├── Cargo.lock
├── Cargo.toml
├── curvine-client
├── curvine-common
├── curvine-docker
├── curvine-fuse
├── curvine-libsdk
├── curvine-server
├── curvine-tests
├── curvine-ufs
├── curvine-web
├── etc
├── orpc
├── rustfmt.toml
├── target
└── testing
```

**Module Description**
- **orpc**: High-performance network communication framework that supports asynchronous RPC calls, providing communication functionality for curvine-server and curvine-client.
- **curvine-common**: Shared library containing protocol definitions, error handling, and common utilities, depended upon by multiple components.
- **curvine-server**: Contains Master and Worker implementations, with Master managing Workers.
- **curvine-client**: Provides APIs for interacting with the server.
- **curvine-fuse**: FUSE filesystem interface that allows Curvine to be mounted as a local filesystem.
- **curvine-libsdk**: Supports multi-language access, including Java SDK and others.
- **curvine-web**: Web management interface and API for server management.
- **curvine-tests**: Testing framework and performance benchmarking tools for testing multiple components.
- **curvine-ufs**: Unified filesystem interface supporting multiple underlying storage systems.



## Development Setup
### Prerequisites
- `rust toolchain` and `protobuf` to build curvine core project; cargo < `1.86.0`
- `llvm` to build some dependency crate of curvine

### Linux
```
# Step 1: Build base image
docker pull centos:8
docker run -itd --name shuttle-centos8-x86 \
-u root --privileged=true \
-v  /root/codespace/xuen/:/xuen  \
centos:8 /bin/bash

# Login to image
docker exec -it shuttle-centos8-x86 /bin/bash

# Update repository mirrors
sed -i -e "s|mirrorlist=|#mirrorlist=|g" /etc/yum.repos.d/CentOS-*
sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*
  
# Install dependencies
yum install fuse fuse3-devel
yum install epel-release
yum install ncurses-compat-libs
yum groupinstall 'Development Tools'
yum install wget
yum install zip

# Install Rust
export RUSTUP_UPDATE_ROOT=https://mirrors.aliyun.com/rustup/rustup
export RUSTUP_DIST_SERVER=https://mirrors.aliyun.com/rustup
curl --proto '=https' --tlsv1.2 -sSf https://mirrors.aliyun.com/repo/rust/rustup-init.sh | sh

# Configure Aliyun Rust mirror
vi ~/.cargo/config.toml

[source.crates-io]
replace-with = 'aliyun'
[source.aliyun]
registry = "sparse+https://mirrors.aliyun.com/crates.io-index/"

# Install all dependencies in this directory
mkdir /app 
cd /app

# Install LLVM
wget https://github.com/llvm/llvm-project/releases/download/llvmorg-13.0.1/clang+llvm-13.0.1-x86_64-linux-gnu-ubuntu-18.04.tar.xz
tar -xvf clang+llvm-13.0.1-x86_64-linux-gnu-ubuntu-18.04.tar.xz 
mv clang+llvm-13.0.1-x86_64-linux-gnu-ubuntu-18.04 llvm
rm -rf clang+llvm-13.0.1-x86_64-linux-gnu-ubuntu-18.04.tar.xz

# Set LLVM environment variables
vi ~/.bash_profile 
PATH=$PATH:/app/llvm/bin
export LIBCLANG_PATH=/app/llvm/lib
export CPATH=$CPATH:/app/llvm/include

# Check clang
source ~/.bash_profile 
clang --version

# Install protobuf
mkdir /app/protoc && cd /app/protoc 
wget https://github.com/protocolbuffers/protobuf/releases/download/v27.2/protoc-27.2-linux-x86_64.zip
unzip protoc-27.2-linux-x86_64.zip
rm -rf protoc-27.2-linux-x86_64.zip 
# Set environment variables
vi ~/.bash_profile 
# Add to PATH: /app/protoc/bin

# Install Java
yum install java-1.8.0-openjdk-devel -y

# Install Maven
cd /app
wget https://downloads.apache.org/maven/maven-3/3.8.8/binaries/apache-maven-3.8.8-bin.tar.gz
tar -xvf apache-maven-3.8.8-bin.tar.gz
mv apache-maven-3.8.8 maven
rm -rf apache-maven-3.8.8-bin.tar.gz 
# Use Aliyun Maven mirror
vi /app/maven/conf/settings.xml
# Find <mirrors> tag and add Aliyun mirror configuration inside:
<mirror>
        <id>aliyunmaven</id>
        <mirrorOf>central</mirrorOf>
        <name>Aliyun Public Repository</name>
        <url>https://maven.aliyun.com/repository/public</url>
</mirror>

# Set environment variables
vi ~/.bash_profile 
# Add to PATH: /app/maven/bin

# Install Node.js
yum install -y nodejs
# Use Aliyun mirror
npm config set registry https://registry.npmmirror.com
```


### Macos


### Windows



## Build & Test

### Docker build


## Debugging


