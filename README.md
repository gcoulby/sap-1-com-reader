# SAP 1 COM-READER

This is a debugging tool for my ESP32 implementation of Ben Eater's SAP-1 computer. This project consists of two applications, which work in complement to the ESP32-based, SAP-1 emulator.

## Installing and running the application

First Clone the repository and `cd` into the directory.

```bash
git clone https://github.com/gcoulby/sap-1-com-reader.git

cd ./sap-1-com-reader
```

Next install the node packages and then run the ExpressJs server.

```bash
npm i
node .\com-reader-express.js
```

This will scan default COM port COM3 and run a server on default TCP Port 8888. These can be changes in the .env file.

NOTE: The .env file does not contains sensitive data so it is not added to the .gitignore. If you are to add sensitive data to the .env file, ensure the file is added to .gitignore.

With this done, you cans start the react application with

```bash
npm start
```

This will open a web browser and show a front-end client that has LED representations for debugging with limited I/Os.

This app works by transmitting JSON over the COM port, to the Express server, which posts it to the TCP port. The react then parses these data and updates the states.

This project compliments https://github.com/gcoulby/SAP-32
