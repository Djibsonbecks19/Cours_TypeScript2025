/*
function direBonjour(name: string): string {
    return `Bonjour, ${name}!`;
}
*/

function direBonjour(name: any): string {
    return `Bonjour, ${name}!`;
}
console.log(direBonjour("Bou gatt"));

type baila = number | string | boolean
type numberNullable = number | null

let a: baila = 5;
a = 10
a = "bou gatt"
a = false

let bailas: baila[] = [5, 10, "bou gatt", false];
let biranes: (number | string | boolean)[] = [5, 10, "bou gatt", false];

bailas.push(55)

let b: number | undefined = undefined
let c: numberNullable = null;

let dataUnknown: unknown = ["bou gatt", 5, true, null, undefined]
let dataAny: any = ["bou gatt", 5, true, null, undefined]

//dataAny = 5
dataAny.push(78);

if(dataUnknown instanceof Array){
    dataUnknown.push(78);
}

let e: number = dataAny;

if(typeof dataUnknown === "number"){
    let f: number = dataUnknown;
}
