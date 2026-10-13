// função:
function x (x, y) {
    return x * y
}

// arrow function:
(x, y) => {
    return x * y
}

// atribuição de função
const fun1 = function (x, y) {
    return x * y
}

const fun2 = (x, y) => {
    return x * y
}

// exemplo: 
const calcularDesconto = (preco, desconto = 0.1) => preco * desconto
console.log(calcularDesconto(200))
console.log(calcularDesconto(200, 0.2))

// somatorio
const numeros = [2,7,3,12,15,6]
const somatorio = (...numeros) => {
    let soma = 0
    for (let n of numeros) { soma += n }
    return soma
}

console.log(somatorio(numeros)),

// timeout
setTimeout(() => {
    console.log("Executando depois de 2 segundos")
}, 2000)

setInterval(() => {
    console.log("Executando a cada 2 segundos")
}, 2000)

// diferença entre setTimeout e setInterval: o setTimeout executa uma vez após o tempo definido, 
// enquanto o setInterval executa repetidamente a cada intervalo de tempo definido.