const frutas = ['banana', 'maçã', 'uva', 'pera', 'mamão', 'morango', 'laranja']

// gere um novo vetor que contenha todos os elementos do vetor frutas,
// mas com letras maiúsculas

let frutas2 = []

for(let f of frutas) {
    frutas2.push(f.toUpperCase())
}

console.log(frutas2)

let frutas3 = frutas.map(elemento => elemento.toUpperCase())
console.log(frutas3)

/*
    map() gera um novo vetor cujos elementos são o resultado da 
    aplicação de uma função(passada a ele como parâmetros) sobre
    cada um dos elementos do vetor original.

    o tamanho do novo vetor gerado é sempre igual ao tamanho
    do vetor original(correspondência 1:1).
*/

// gerar um novo vetor que contenha os números elevados ao quadrado
let nums = [2, 3, 4, 5, 6, 7, 8, 9]

let quadrados = nums.map(n => n ** 2)
console.log(quadrados)

let itensFrutas = frutas.map(f => '<li>' + f + '</li>')
console.log(itensFrutas)