"use strict";
function direBonjour(name) {
    return `Bonjour, ${name}!`;
}
console.log(direBonjour("Bou gatt"));
let a = 5;
a = 10;
a = "bou gatt";
a = false;
let bailas = [5, 10, "bou gatt", false];
let biranes = [5, 10, "bou gatt", false];
bailas.push(55);
let b = undefined;
let c = null;
let dataUnknown = ["bou gatt", 5, true, null, undefined];
let dataAny = ["bou gatt", 5, true, null, undefined];
dataAny.push(78);
if (dataUnknown instanceof Array) {
    dataUnknown.push(78);
}
let e = dataAny;
if (typeof dataUnknown === "number") {
    let f = dataUnknown;
}
