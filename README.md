# almost blockchain
<!--
[![GitHub repo size](https://img.shields.io/github/repo-size/zhooda/almost-blockchain.svg?logo=github&logoColor=white&style=flat-square&labelColor=black)](https://github.com/zhooda/almost-blockchain)
![GitHub language count](https://img.shields.io/github/languages/count/zhooda/almost-blockchain.svg?logo=koding&logoColor=white&style=flat-square&labelColor=black)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/zhooda/almost-blockchain.svg?logo=code-climate&logoColor=white&style=flat-square&labelColor=black)
[![nodejs version](https://img.shields.io/static/v1.svg?style=flat-square&logo=node.js&label=node.js&logoColor=white&message=10.26.0%2B&color=green&labelColor=black)](https://nodejs.org)
[![npm version](https://img.shields.io/static/v1.svg?style=flat-square&logo=npm&logoColor=white&label=npm&message=6.9.0%2B&color=red&labelColor=black)](https://nodejs.org)
[![macOS](https://img.shields.io/static/v1.svg?style=flat-square&logo=apple&logoColor=white&label=macOS&message=10.13.0%2B&color=orange&labelColor=black)](https://developer.apple.com/account/ios/profile/)
[![iOS](https://img.shields.io/static/v1.svg?style=flat-square&logo=apple&logoColor=white&label=iOS&message=11.0%2B&color=orange&labelColor=black)](https://developer.apple.com/account/ios/profile/)
[![xcode](https://img.shields.io/static/v1.svg?style=flat-square&logo=xcode&logoColor=white&label=Xcode&message=10.0%2B&color=blue&labelColor=black)](https://developer.apple.com/xcode/)
[![paid dev account](https://img.shields.io/static/v1.svg?style=flat-square&logo=swift&logoColor=white&label=developer%20tier&message=$0/year%20|%20$99/year&color=blue&labelColor=black)](https://developer.apple.com/account/ios/profile/)
-->

<p align="center"><a href="https://github.com/zhooda/almost-blockchain"><img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/zhooda/almost-blockchain.svg?logo=github&amp;logoColor=white&amp;style=flat-square&amp;labelColor=black" /></a>
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/zhooda/almost-blockchain.svg?logo=koding&amp;logoColor=white&amp;style=flat-square&amp;labelColor=black" />
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/zhooda/almost-blockchain.svg?logo=code-climate&logoColor=white&style=flat-square&labelColor=black" />
<a href="https://nodejs.org"><img alt="nodejs version" src="https://img.shields.io/static/v1.svg?style=flat-square&amp;logo=node.js&amp;label=node.js&amp;logoColor=white&amp;message=10.26.0%2B&amp;color=green&amp;labelColor=black" /></a>
<a href="https://nodejs.org"><img alt="npm version" src="https://img.shields.io/static/v1.svg?style=flat-square&amp;logo=npm&amp;logoColor=white&amp;label=npm&amp;message=6.9.0%2B&amp;color=red&amp;labelColor=black" /></a>
<a href="https://developer.apple.com/account/ios/profile/"><img alt="macOS" src="https://img.shields.io/static/v1.svg?style=flat-square&amp;logo=apple&amp;logoColor=white&amp;label=macOS&amp;message=10.15.0%2B&amp;color=orange&amp;labelColor=black" /></a>
<a href="https://developer.apple.com/account/ios/profile/"><img alt="iOS" src="https://img.shields.io/static/v1.svg?style=flat-square&amp;logo=apple&amp;logoColor=white&amp;label=iOS&amp;message=13.0%2B&amp;color=orange&amp;labelColor=black" /></a>
<a href="https://developer.apple.com/xcode/"><img alt="xcode" src="https://img.shields.io/static/v1.svg?style=flat-square&amp;logo=xcode&amp;logoColor=white&amp;label=Xcode&amp;message=11.0%20Beta&amp;color=blue&amp;labelColor=black" /></a>
<a href="https://developer.apple.com/account/ios/profile/"><img alt="paid dev account" src="https://img.shields.io/static/v1.svg?style=flat-square&amp;logo=swift&amp;logoColor=white&amp;label=developer%20tier&amp;message=$0/year%20|%20$99/year&amp;color=blue&amp;labelColor=black" /></a></p>

Amlost Blockchain is a custom blockchain and cryptocurrency built in JavaScript on NodeJS.
Within this project, there are three main components:
- Webserver that runs the blockchain
- AngularJS based web front end for admin purposes
- Mobile client (iOS Only) for wallet interface

## Getting Started

These instructions *should* get you a copy of the project up and running
on your local machine. This is usually just for development and testing,
but we have no deployment strategies, so have at it.

#### Prerequisites

To run the webserver and web client, you will need:

- NodeJS 10.26.0 or later
- npm 6.9.0 or later
- AngularJS 7.2.15 or later


If you'd like to build or test the iOS app, you will need:

- macOS 10.13 or later (Virtual Machines are fine)
- iOS 11.0 or later (Physical device not required)
- Xcode 10.0 or later
- Apple Developer account (Free tier is fine for testing)

#### Dependencies

- Node Package Manager
- AngularJS CLI
- Elliptic (Curve Cryptography)

**NOTE:** To insall dependencies included in package-lock.json, run `npm install` in project root directory.

#### Installation

Clone to your home directory or checkout with SVN to get a copy of Almost Blockchain.

```bash
git clone https://github.com/zhooda/almost-blockchain
```

## Usage

Running the WebServer
```bash
cd ~/almost-blockchain/Sources/WebServer

node server.js
```

#### Web Client:
1. Open a browser that supports ES6 JavaScript
2. Go to url http://localhost:port
3. Play around

#### Mobile Client:
*NOTE:* You will need a Mac running the latest version of Xcode for this to work
1. ```$ cd ~/almost-blockchain/Sources/MobileClient```
2. ```$ open -R almost-blockchain.xcodeproj```
3. Select your development team and provisioning profile
4. Choose build target device or simulator
5. Press the build and run button

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)