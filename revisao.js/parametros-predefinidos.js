//Parâmetros predefinidos ou opcionais em funções
//Regras:
// 1) Parâmetros opcionais devem vir após os obrigatórios
// 2) Pode haver mais de um parãmetro opcional por função
//forma como parãmetro predefinido ou opcional
function calcularArea(base, altura, forma = 'Q') {
    let res
    switch(forma){
        case 'Q': //quadrilátero
            res = base * altura
            break
        case 'T': //triângulo
            res = base * altura / 2
            break
        case 'E': //elipse
            res = (base/2) * (altura/2) * Math.PI
    }
    return res.toFixed(casasDec)
}

console.log(calcularArea(20, 8, 'Q'))
console.log(calcularArea(7.5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, 'E'))
console.log(calcularArea(30, 60))