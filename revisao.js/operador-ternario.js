let nota = 7.2
let situacao

/*if(nota >= 6) {
    situacao = 'Aprovado'
}
else {
    situacao = 'Reprovado'
}*/

/*if (nota >= 6) situacao = 'Aprovado'
else situacao = 'Reprovado'*/

// As três partes do operador ternário
// 1ª parte: confição (que iria depois do if)
// 2ª parte: o resultado, caso a condição seja verdadeira
// Entre a 2ª e a 3ª parte -> :
// 3ª parte: o resultado, caso a consição seja falsa
situacao = (nota >= 6 ? 'Aprovado' : 'Reprovado')

console.log(situacao)

let user = 'admin'
let userType

userType = (user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user')

console.log(userType)