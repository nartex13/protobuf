var ProtoBuf = require("protobufjs");

var builder = ProtoBuf.loadProtoFile("complex.proto"),
    Game = builder.build("Game"),
    Car = Game.Cars.Car;
    
    
var car = new Car({
    "model": "Rusty",
    "vendor": {
        "name": "Iron Inc.",
        "address": {
            "country": "US"
        }
    },
    "speed": "SUPERFAST" // also equivalent to "speed": 2
});

// OR: It's also possible to mix all of this!

//mengubah menjadi binner
var buffer = car.encode();
console.log(buffer);

var dbuffer = Car.decode(buffer);
console.log(dbuffer);


//var socket = ...;
//socket.send(buffer.toArrayBuffer()); // node.js: buffer.toBuffer()

// OR: Short...
//socket.send(car.toArrayBuffer()); // node.js: car.toBuffer()