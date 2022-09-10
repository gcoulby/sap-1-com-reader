const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const cors = require("cors");
const express = require("express");
require("dotenv").config();

var app = express(),
    server = require("http").Server(app),
    io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    }),
    port = process.env.TCP_PORT;

//Server start
server.listen(port, () => console.log("on port" + port));

const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOption));
//if you want in every domain then
app.use(cors());

app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

//user server
app.use(express.static(__dirname + "/public"));

io.on("connection", onConnection);

var connectedSocket = null;
function onConnection(socket) {
    connectedSocket = socket;
}

const serial = new SerialPort({ path: process.env.COM_PORT, baudRate: 500000 });
const parser = new ReadlineParser();
serial.pipe(parser);
parser.on("data", function (data) {
    io.emit("serialdata", { data: data });
});
