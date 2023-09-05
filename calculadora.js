var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multi = require("./modulos/multi");
var sub = require("./modulos/sub");
var message = require("./modulos/message");
var nome = "Daniel";
var msg = "Seja bem-vindo";

console.log("A soma de X e Y é: " + somar(45,30));
console.log("A média de X e Y é: " + media(12,18));
console.log("A multiplicação de X e Y é: " + multi(47,25));
console.log("A subtração de X e Y é: " + sub(87,34));
console.log(message(nome,msg));

