"use strict";
// Função com tipagem
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Eu"));
// Retornar dois tipos diferentes
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone(19998765432));
// Na funções assíncrona você tipa o return promise entre <>
async function getDatabase(id) {
    return "Heber";
}
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
// console.log(bot1);
// console.log(bot2);
class Pessoa {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `${this.name}`;
    }
}
const p = new Pessoa(1, "gustavo");
console.log(p.sayHello());
