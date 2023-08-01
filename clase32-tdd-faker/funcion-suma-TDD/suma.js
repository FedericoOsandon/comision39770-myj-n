// const suma = (num1, num2) => {
//     if (!num1 || !num2) return 0 
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') return null
//     let result = num1 + num2
//     return result 
// }
// const suma = (...numeros) => {  // numeros = [1, 2, 3, 4, 5]
//     // if (!num1 || !num2) return 0 
//     if(numeros.length === 0) return 0    
//     // if (typeof num1 !== 'number' || typeof num2 !== 'number') return null
//     let validInput = true
//     for (let i = 0; i < numeros.length && validInput; i++) {
//         if (typeof numeros[i] !== 'number') {
//             validInput=false
//         }        
//     }
//     if (!validInput) return null
//     // let result = num1 + num2
//     let result = 0
//     for (let i = 0; i < numeros.length; i++) {
//         result += numeros[i]        
//     }    
//     return result 
// }

// refactoring de suma
const suma = (...numeros) => {
    if(numeros.length === 0) return 0  
    if (!numeros.every(numero => typeof numero === 'number')) return null
    return numeros.reduce((sumaTotal, numero) => sumaTotal += numero , 0)
}

let testPasados = 0
const cantidadTotalTest = 4

console.log('Test 1: la función debe devolver null si algún parámetro es numérico')
let resultTest1 = suma('2', 2) // null
if (resultTest1===null) {
    console.log('Test 1 pasado')
    testPasados++
}else console.log(`Test 1 no ha pasado, se recibió ${typeof resultTest1} pero se esperaba null`)
console.log('--------------------------------------------------------------------')

console.log('Test 2: la función debe devolver 0 si no se paso algún parámetro')
let resultTest2 = suma() // null
if (resultTest2 === 0) {
    console.log('Test 2 pasado')
    testPasados++
}else console.log(`Test  no ha pasado, se recibió ${resultTest2} pero se esperaba 0`)
console.log('--------------------------------------------------------------------')

console.log('Test 3: la función debe devolver la suma correctamente')
let resultTest3 = suma(3, 2) // null
if (resultTest3 === 5) {
    console.log('Test 3 pasado')
    testPasados++
}else console.log(`Test 3 no ha pasado, se recibió ${resultTest3} pero se esperaba 5`)
console.log('--------------------------------------------------------------------')

console.log('Test 4: la función debe realizar la suma con cualquier cantidad de parámetros')
let resultTest4 = suma(1, 2, 3, 4, 5) // null
if (resultTest4===15) {
    console.log('Test 4 pasado')
    testPasados++
}else console.log(`Test 4 no ha pasado, se recibió ${resultTest4} pero se esperaba 15`)

if (testPasados === cantidadTotalTest) console.log('paso todos los test correctamente')
else console.log(`Han pasado ${testPasados} de ${cantidadTotalTest} test`) 