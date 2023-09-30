# Typescrit puro

Link para documentação do [typescript](https://www.typescriptlang.org/)


- Para executar JavaScript utilize o comando 'node' e a localização do seu arquivo. Exemplo:

```
node src/index.js
```
<br>
- Para executar Typescript utilize o comando 'npx tsc' e a localização do seu arquivo. Exemplo:

```
npx tsc src/index.ts
```
<br>
- Esse codigo usado no node.js, faz criar um arquivo chamado tsconfig.json

```
npx tsc --init
```
Podemos utilizar o modo de configuração visual na documentação que se encontra no menu 'Playground > TS Config'
<br>
- Configurações que fizemos no arquivo tsconfig.json

"rootDir": "./src",      
"outDir": "./build", 

- Agora podemos executar o typescript apenas com o comando:

```
npx tsc
```

-- **Mas para executar apenas com um comando utilizaremos:**

```
npm run start
```

- Utilize o type para definir a tipagem de dados

#### Exemplos de código
```
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
 ```

- Na funções assíncrona você tipa o return promise entre <>

```
async function getDatabase(id:number): Promise<number | string> {
   return "Heber";
}
```

- Interface (type X interface)
 - os dois aceitam multi tipos
 - podem ter uma propriedade que é somente leitura (readonly). Isso significa que só pode ser atribuida durante a criação e não poderá ser alterado posteriormente

- Type é mais utilizado para tipar objetos: 

```
type robot = {
   id: number;
   name: string;
}
```
- Interface é mais utilizado para tipar classes

```
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


class Pessoa implements robot2{
   id: number | string;
   name: string;

   constructor(id: number | string, name:string){
      this.id = id;
      this.name = name;
   }
   sayHello(): string {
      return `${this.name}`;
   }

}

const p = new Pessoa(1, "I'm Isaque")
console.log(p.sayHello());

```

#### Para instalar servidor 
```
npm install ts-node-dev -D
```
E no arquivo package.json colocamos um novo script:
```
"start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",
```

