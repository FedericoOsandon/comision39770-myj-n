// usuarios

// objetos literales
// const user1 = {
//     nombre: "Juan",
//     apelligo: "Perez",
//     edad: 20,
//     email: "j@gmail.com"
// }
// const user2 = {
//     nombre: "Ana",
//     apelligo: "Perez",
//     edad: 20,
//     email: "a@gmail.com"
// }
// const user3 = {
//     nombre: "Pedro",
//     apelligo: "Perez",
//     edad: 20,
//     email: "p@gmail.com"
// }
// const user4 = {
//     nombre: "Maria",
//     apelligo: "Perez",
//     edad: 20,
//     email: "m@gmail.com",
//     // saludar: function(){
//     //     console.log("Hola soy " + this.nombre)
//     // }
// }
// tenemos que crear 100 usuarios más
// const usersArray = [user1, user2, user3, user4]

// clase -> molde para crear objetos 
// accion de crear objetos -> instanciar una clase de algún tipo
// clases : legibilidad, reutilización, encapsulamiento, herencia
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    presentarse(){
        return "Hola soy " + this.nombre + ' ' +this.apellido  
    }
}

class User extends Persona{
    // #edad = 0 // atributo privado
    constructor(nombre, apellido, anioDeNacimiento, email){ // contstruye el objeto
        super(nombre, apellido)
        this.anioDeNacimiento = anioDeNacimiento
        this.edad = 2020 - this.anioDeNacimiento
        this.email = email
    }

    // calcularEdad(){
    //     this.#edad = 2020 - this.anioDeNacimiento        
    // }
    mostrarEdad(){
        return this.edad
    }
}

const user1 = new User('Juan', 'Perez', 2000, 'j@gmail.com')
const user2 = new User('Ana', 'Perez', 1997, 'a@gmail.com')
const user3 = new User('Pedro', 'Perez', 1996, 'p@gmail.com')
const user4 = new User('Maria', 'Perez', 2010, 'm@gmail.com')

console.log(user1.presentarse())

console.log(user2.mostrarEdad())

// console.log(user2.presentarse())
// console.log(user3.presentarse())
// console.log(user4.presentarse())

// prototype -> función constructora User(){} -> class User{}