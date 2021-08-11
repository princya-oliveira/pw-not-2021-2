// função tradicional com 1 parâmetro e 1 linha de código 
// no corpo, com return
function quadrado(x) {
    return x * x
}

// arrow function equivalente
// 1) a função deve ser atribuída a uma variável (ou melhor, a uma constante)
// 2) desaparece a palavra-chave 'function'
// 3) desaparaecem os parênteses em torno do parâmetro
// 4) após o parâmetro, aparece o símbolo => (flecha - arrow)
// 5) desaparecem as chaves em torno do corpo da função
// 6) desaparece a palavra-chave 'return'
const quadrado2 = x => x * x

console.log(quadrado(9))
console.log(quadrado2(9))

console.log('---------------------------------')

// função tradicional com 2 argumentos, 1 linha de corpo com return
function potencia(base, expoente) {
    return base ** expoente
}

// arrow function correspondente
// retornam os parênteses em torno dos argumentos
const potencia2 = (base, expoente) => base ** expoente

console.log(potencia(3, 5))
console.log(potencia2(3, 5))

console.log('---------------------------------')

// função tradicional sem parâmetros, 1 linha de corpo com return
function horaAtual() {
    return new Date()
}

// arrow function correspondente
// os parâmetros vazios marcam a posição do argumento
const horaAtual2 = () => Date()

console.log(horaAtual().toLocaleString('pt-br', {timeZone: 'America/Sao_Paulo'}))
console.log(horaAtual2().toLocalString('pt-br', {timeZone: 'America/Sao_Paulo'}))

console.log('---------------------------------')

// função tradicional com 1 parâmetro e múltiplas linhas de corpo
function fatorial(n) {
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

// arrow function correspondente
// retornam as chaves do corpo da função
const fatorial2 = n => {
    let res = 1
    for(let i = n; i < 1; i--) res *= i
    return res
}

// arrow function recursivo
const fatorial3 = n => (n <= 1 ? 1 : n * fatorial3(n - 1))

console.log(fatorial(5))
console.log(fatorial2(5))
console.log(fatorial3(5))