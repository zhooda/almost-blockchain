# almost blockchain

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
- [NodeJS](https://nodejs.org) - 10.16.0 +
- [Node Package Manager](https://nodejs.org) - 6.9.0 +

If you'd like to build or test the iOS app, you will need:
- A Mac with macOS 13.0 +
- A registered Apple developer account
- A valid iOS provisioning profile
- [Apple Xcode](https://itunes.apple.com/app/xcode/id497799835)


#### Dependencies

- Node Package Manager
- AngularJS
- CommonCrypto? 

#### Installation

Clone to your home directory or checkout with SVN to get a copy of Almost Blockchain.

```bash
git clone https://github.com/zhooda/almost-blockchain
```

#### Usage

Running the WebServer
```bash
cd ~/almost-blockchain/Sources/WebServer

node server.js
```

Running the WebClient (Requires WebServer to be running):
1. Open a browser that supports ES6 JavaScript
2. Go to url http://localhost:port
3. Play around

Running the MobileClient:
*NOTE:* You will need a Mac running the latest version of Xcode for this to work
1. ```bash cd ~/almost-blockchain/Sources/MobileClient```
2. ```bash open -R almost-blockchain.xcodeproj```
3. Select your development team and provisioning profile
4. Choose build target device or simulator
5. Press the build and run button

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)