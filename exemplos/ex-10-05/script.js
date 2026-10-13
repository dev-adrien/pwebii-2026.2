
while (true) {

    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let soma = 0

    if (n1 > n2) {
        alert("O primeiro número deve ser menor que o segundo.")
        continue
    }
    if ((n1%2 === 0 && (n2-n1) >= 10)) {
        n1++
        for (let i = n1; i <= n2; i+=2) {
            console.log(i);
            soma += i;
        }
    } else if ((n1%2 === 1 || (n2-n1) > 9)) {
        for (let i = n1; i <= n2; i+=2) {
            console.log(i);
            soma += i;
        }
    } else {
        alert("Deve escrever um intervalo válido.")
        continue
    }

    console.log(`Soma: ${soma}`);
    break

}