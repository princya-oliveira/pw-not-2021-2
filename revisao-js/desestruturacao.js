// vetor
let carros = ['celta', 'uno', 'gol']

// desestruturacao total do vetor
let [a, b, c] = carros

console.log(a)
console.log(b)
console.log(c)

// desestruturação parcial
let [m, n] = carros

console.log('-----------------------------')
console.log(m)
console.log(n)

let [x, , z] = carros

console.log('-----------------------------')
console.log(x)
console.log(z)

// objeto
let veiculo = {
    marca: 'volkswagen',
    modelo: 'fusca',
    cor: 'preto',
    ano: 1969
}

// desestruturação total de um objeto
// 1ª regra: as variáveis devem ter o mesmo nome das propriedades;
// 2ª regra: a ordem não importa.

let {cor, modelo, ano, marca} = veiculo

console.log('-----------------------------')
console.log(marca)
console.log(modelo)
console.log(cor)
console.log(ano)

// para fazer a desestruturação parcial de objeto, basta criar variáveis
// correspondentes apenas às propriedades de interesse.