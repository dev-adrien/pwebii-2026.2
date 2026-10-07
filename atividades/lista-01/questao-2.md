# Lista de Exercícios - Questão 3: Lógica, Estruturas e Funções em JavaScript

---

### a) Operações Básicas

> **Enunciado:** Escreva uma função que receba dois números e um caractere como argumentos. O caractere recebido informa que tipo de operação deve ser realizada. Por exemplo, ao receber o caractere `+`, a função deve calcular a soma dos números passados como argumento e retornar o resultado. Use `+` para soma, `-` para subtração, `/` para divisão e `*` para multiplicação.

```javascript
function calculadora(n1, n2, operacao) {
    switch (operacao) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 === 0) {
                return "Erro: divisão por zero";
            }
            return n1 / n2;
        default:
            return "Erro: operação inválida";
    }
}

let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");

console.log(`Resultado: ${calculadora(n1, n2, operacao)}`);
```

---

### b) Produtório com Quantidade Variável de Argumentos

> **Enunciado:** Escreva uma função que receba uma quantidade não específica (aleatória) de números como argumentos e retorne o produtório dos números passados.

```javascript
function produtorio() {
    let numbers = [];
    let cont = 1;
    while (true) {
        let n = Number(prompt(`Digite o ${cont}º número (ou um valor não numérico para encerrar):`));
        if (isNaN(n)) {
            break;
        }
        numbers.push(n);
        cont++;
    }

    let total = 1;

    for (let i = 0; i < numbers.length; i++) {
        total *= numbers[i];
        console.log(`${numbers[i]}`);
    }

    console.log(`Resultado: ${total}`);
}

produtorio();
```

---

### c) Fatorial com Recursividade

> **Enunciado:** Implemente uma função que receba um número e retorne seu fatorial. Use recursividade.

```javascript
function fatorial(n) {
    if (n < 0) {
        return "Erro: fatorial de número negativo não é definido";
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

let numero = Number(prompt("Digite um número para calcular o fatorial: "));
console.log(`Fatorial de ${numero}: ${fatorial(numero)}`);
```

---

### d) Filtragem de Números Ímpares

> **Enunciado:** Implemente uma função que receba um array de números e retorne um outro array contendo somente os números ímpares encontrados.

```javascript
let numeros = [1, 4, 23, 24, 5, 9, 30, 1000];

function numerosImpares(numeros) {
    let impares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            impares.push(numeros[i]);
        }
    }
    return impares;
}

console.log(numerosImpares(numeros));
```

---

### e) Cálculo de Total com Desconto Opcional

> **Enunciado:** Suponha que você está implementando um sistema de e-commerce e precise calcular o valor total de um produto no carrinho do cliente, aplicando ou não um desconto. Nesse contexto, escreva uma função que receba o valor unitário do produto, a quantidade solicitada e o desconto a ser aplicado e retorne o valor total da compra. Ao chamar a função, podemos passar ou não o desconto a ser aplicado. Caso nenhum valor de desconto seja passado, o padrão deve ser 0 (sem desconto).

```javascript
function checkout(valor, qtn, desc) {
    let total = valor * qtn;
    let desconto = total * (desc / 100);
    return total - desconto;
}

let valor = Number(prompt("Digite o valor do produto: "));
let qtn = Number(prompt("Digite a quantidade do produto: "));
let desc = Number(prompt("Digite o desconto em porcentagem: "));

console.log(`Total a pagar: R$ ${checkout(valor, qtn, desc).toFixed(2)}`);
```

---

### f) Objeto de Conta Bancária

> **Enunciado:** Crie um objeto que represente uma conta bancária, com as propriedades saldo e número da conta. O objeto deve ter métodos para depositar, sacar e informar saldo. O método depositar deve receber o valor a ser adicionado ao saldo; o método sacar deve receber o valor a ser debitado do saldo (caso haja saldo disponível); o método informar saldo deve exibir uma mensagem informando ao usuário o seu saldo atual.

```javascript
let conta = {
    numeroConta: "123234",
    saldo: 1000.0,
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    },
    sacar: function(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente");
        }
    },
    informar: function() {
        console.log(`Número da conta: ${this.numeroConta}, Saldo: R$ ${this.saldo.toFixed(2)}`);
    }
};

conta.informar();
conta.depositar(500);
conta.informar();

conta.sacar(200);
conta.informar();

conta.sacar(2000);
conta.informar();
```