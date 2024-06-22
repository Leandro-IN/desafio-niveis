let vitorias = 75

let derrotas = 28

let SaldoVitorias = vitorias - derrotas
console.log(SaldoVitorias)

let nivel = SaldoVitorias


if (nivel < 10) {
    console.log("Ferro")
} else if (nivel >= 11 && nivel  <= 20) {
    console.log("Bronze");
} else if (nivel >= 21 && nivel <= 50) {
    console.log("Prata");
} else if (nivel >= 51 && nivel <= 80) {
    console.log("Ouro");
} else if (nivel >= 81 && nivel <= 90) {
    console.log("Diamante");
} else if (nivel >= 91 && nivel <= 100) {
    console.log("Lendário");
} else {
    console.log("Imortal")
}

console.log("O Herói tem de saldo de " + SaldoVitorias + ". Está no nível " + nivel);