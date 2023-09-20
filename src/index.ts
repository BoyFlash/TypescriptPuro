//Maneira de tipagem
type heroi = {
   name: string;
   vulgo: string;
}

// Função com tipagem
function addNumber(x: number, y: number): number {
   return x + y;
}
let soma: number = addNumber(4, 7);
console.log(soma);

function addToHello(name: string): string {
   return `Hello ${name}`;
}
console.log(addToHello("Eu"));

// Retornar dois tipos diferentes
function callToPhone(phone: number | string): number | string {
   return phone;
}
console.log(callToPhone(19998765432));

// Na funções assíncrona você tipa o return promise entre <>
async function getDatabase(id:number): Promise<number | string> {
   return "Heber";
}

//Interface (type X interface)
// - os dois aceitam multi tipos
// - podem ter uma propriedade que é somente leitura (readonly). Isso significa que só pode ser atribuida durante a criação e não poderá ser alterado posteriormente
//Type é mais utilizado para tipar objetos 
type robot = {
   id: number;
   name: string;
}

//Interface é mais utilizado para tipar classes
interface robot2 { // não tem o igual
   readonly id: number;
   name: string;
}
const bot1: robot = {
   id: 1,
   name: "megaman",
}
const bot2: robot2 = {
   id: 1,
   name: "megaman",
}
console.log(bot1);
console.log(bot2);
