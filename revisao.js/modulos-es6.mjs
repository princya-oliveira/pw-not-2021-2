// ES6 -> ECMAScript versão 6, de 2016

// Sempre que o arquivo tem export(sem default), a importação precisa
// acontecer entre chaves (desestruturação)
import {numeros} from './includes/dados.mjs'

// Podemos importar só o que vamos efetivamente usar, caso o arquivo de 
// origem exporte mais de um item
// import { somaVet } from './includes/funcoes.mjs'
import {somaVet, quadradoVet} from './includes/funcoes.mjs'

console.log(somaVet(numeros))
console.log(quadradoVet(numeros))