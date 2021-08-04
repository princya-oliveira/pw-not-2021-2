let nota = 7.3
let situacao

/*
if(nota >= 6) {
    situacao = 'Aprovado'
}
else{
    situacao = 'Reprovado'
}
*/

// usando o operador ternário:
// condição ? resultado se verdadeiro : resultado se falso
situacao = nota >= 6 ? 'Aprovado' : 'Reprovado'

console.log(`Nota ${nota}, situação: ${situacao}`)

let user = 'admin'

let msg = user === 'admin' ? 'Pode logar' : 'Não pode logar'

console.log(msg)