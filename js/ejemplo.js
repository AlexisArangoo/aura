const prompt = require('prompt-sync')()
let nombre= ""
let nota1= 0
let nota2= 0
let nota3= 0
let promedio= 0

nombre = prompt('Cuál es el nombre del estudiante: ')
nota1 = parseFloat(prompt('Cuaál es la nota 1: '))
nota2 = parseFloat(prompt('Cuaál es la nota 2: '))
nota3 = parseFloat(prompt('Cuaál es la nota 3: '))

promedio = (nota1 + nota2 + nota3)/3

if (promedio >= 3) {
    console.log("El estudiante "+nombre+" aprobo el curso")
}else if (promedio == 2.9){
    console.log("El estudiante "+nombre+" puede habilitar el curso")
} else {
    console.log("El estudiante "+nombre+" no aprobo el curso")
}

console.log("El promedio del estudiante es: "+promedio)


