# Lista de Exercícios - Questão 2: Lógica de Programação Básica em JavaScript

---

### a) Conversão de Real (R$) para Dólar Americano (US$)

> **Enunciado:** Escreva um programa que leia um valor em R$ (reais) e a cotação atual do dólar americano, após isso, converta o valor de entrada para US$ (dólar americano) e exiba o resultado.

```javascript
let valor = Number(prompt("Digite o valor em reais (R$): "));
let cotacao = Number(prompt("Digite a cotação atual do dólar: "));

if (valor <= 0 || cotacao <= 0 || isNaN(valor) || isNaN(cotacao)) {
    alert("Valores inválidos. Digite valores numéricos positivos.");
} else {
    let valorDolar = valor / cotacao;
    console.log(`Valor em reais: R$ ${valor.toFixed(2)}`);
    console.log(`Cotação informada: R$ ${cotacao.toFixed(2)}`);
    console.log(`Valor convertido: US$ ${valorDolar.toFixed(2)}`);
}
```

---

### b) Perímetro da Circunferência

> **Enunciado:** Escreva um programa que calcule o perímetro (circunferência) de um círculo a partir do valor do raio.

```javascript
let r = Number(prompt("Digite o valor do raio do círculo: "));

if (r <= 0 || isNaN(r)) {
    alert("Valor inválido. Digite um raio numérico positivo.");
} else {
    let perimetro = 2 * Math.PI * r;
    console.log(`Raio: ${r}`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}
```

---

### c) Cálculo de Média Ponderada e Situação do Aluno (IFCE)

> **Enunciado:** Escreva um programa para calcular a nota final de um aluno de curso de graduação do IFCE, sabendo que o semestre letivo é dividido em 2 etapas (N1 e N2) e a nota final é obtida a partir de uma média ponderada das notas obtidas nas 2 etapas. Os pesos para cada etapa são os seguintes: N1, peso 2; N2, peso 3. O programa deve solicitar ao aluno as notas de cada etapa e, ao final, o programa deve exibir uma mensagem informando qual a sua nota final e se ele está aprovado ou reprovado, sabendo que a nota mínima para aprovação é 7,0.

```javascript
let n1 = Number(prompt("Digite a primeira nota (N1 - Peso 2): "));
let n2 = Number(prompt("Digite a segunda nota (N2 - Peso 3): "));
const NOTA_MINIMA = 7.0;

if (isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
    alert("Notas inválidas. As notas devem estar no intervalo de 0.0 a 10.0.");
} else {
    let media = ((n1 * 2) + (n2 * 3)) / 5;
    console.log(`Nota N1: ${n1.toFixed(1)}`);
    console.log(`Nota N2: ${n2.toFixed(1)}`);
    console.log(`Nota Final (Média Ponderada): ${media.toFixed(2)}`);

    if (media >= NOTA_MINIMA) {
        console.log("Situação: Aprovado.");
    } else {
        console.log("Situação: Reprovado.");
    }
}
```

---

### d) Soma de Números Primos Entre $n$ Entradas

> **Enunciado:** Dados n números inteiros positivos, calcule e exiba a soma dos que são primos.

```javascript
function ehPrimo(numero) {
    if (numero <= 1) return false;
    for (let divisor = 2; divisor * divisor <= numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

let quantidade = Number(prompt("Quantos números você vai digitar? "));

while (isNaN(quantidade) || quantidade <= 0) {
    alert("Quantidade inválida. Digite um número inteiro positivo.");
    quantidade = Number(prompt("Quantos números você vai digitar? "));
}

let soma = 0;
let primosEncontrados = [];

for (let i = 1; i <= quantidade; i++) {
    let num = Number(prompt(`Digite o ${i}º número inteiro positivo:`));

    while (isNaN(num) || num <= 0) {
        alert("Número inválido. Digite um valor positivo.");
        num = Number(prompt(`Digite o ${i}º número novamente:`));
    }

    if (ehPrimo(num)) {
        soma += num;
        primosEncontrados.push(num);
    }
}

console.log(`Números primos identificados: ${primosEncontrados.join(", ") || "Nenhum"}`);
console.log(`Soma dos números primos: ${soma}`);
```