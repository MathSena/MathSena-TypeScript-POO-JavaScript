"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var carro = new Carro_1["default"]('Velost', 3);
var moto = new Moto_1["default"]();
moto.acelerar();
moto.acelerar();
carro.acelerar();
console.log(carro);
console.log(moto);
