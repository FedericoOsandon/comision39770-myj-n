import mongoose from "mongoose"
import chai from 'chai'
import { createHash, passwordValidation } from "../src/utils/index.js"
import UserDTO from "../src/dto/User.dto.js"

const expect = chai.expect

describe('Testing de bcrypt', ()=>{
    
    it('El servicion debe devolver un haseo efectivo del password', async () => {
        const password = 'pass123456'
        const hasedPassword = await createHash(password)

        // console.log(hasedPassword, password) // usuario de la base de datos
        expect(hasedPassword).to.not.equal(password)
         
    })
    it('El servicion debe devolver un haseo efectivo del password', async () => {
        const password = 'pass123456'
        const hasedPassword = await createHash(password)

        const userDbMock = {password: hasedPassword} // usuario de la base de datos
        const isValidPass = await passwordValidation(userDbMock, password)
        expect(isValidPass).to.be.true
    })

})
describe('Testing de Dto', ()=>{
    it('El servicio debe devolver un user con con campos unificados', ()=>{
        let userDbMock = {
            first_name: 'Fede',
            last_name: 'Osandón',
            email: 'f@gmail.com', 
            password: '123456'
        }

        const userDtoResult = UserDTO.getUserTokenFrom(userDbMock)
        // para pasar el testing tiene que cumplir todo lo sgte.
        expect(userDtoResult).to.have.property('name', `${userDbMock.first_name} ${userDbMock.last_name}`)
        expect(userDtoResult).to.not.have.property('first_name')
        expect(userDtoResult).to.not.have.property('last_name')
        expect(userDtoResult).to.not.have.property('password')
    })
})