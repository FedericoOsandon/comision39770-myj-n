import mongoose, { connect } from "mongoose";
import Users from '../src/dao/Users.dao.js'
import Assert from 'assert'

connect('mongodb://localhost:27017/a39770')

const assert = Assert.strict

describe('Testing Users Dao', ()=>{
    before(function(){
        this.usersDao = new Users()
    })
    beforeEach(function () {
        mongoose.connection.collections.users.drop()
        this.timeout(2000)
    })
    it('El Dao de debe traer(Read) todos los usuarios en formato arreglo', async function(){
        // console.log(this.userDao)

        const result = await this.usersDao.get()
        assert.strictEqual(Array.isArray(result), true )

    })
    // it('El dao debe agregar un usuario correctamente a la base de datos', async function(){
    //     let mockUser = {
    //         first_name: 'Federico',
    //         last_name: 'Osandón',
    //         email: 'f@gmail.com',
    //         password: '123456'
    //     }
    //     const result = await this.usersDao.save(mockUser)
    //     assert.ok(result._id)
    // })
    // it('El dao agregarpa al documento insertado un arreglo de mascota vacío por defecto', async function(){
    //     let mockUser = {
    //         first_name: 'Federico',
    //         last_name: 'Osandón',
    //         email: 'f@gmail.com',
    //         password: '123456'
    //     }
    //     const result = await this.usersDao.save(mockUser)
        
    //     assert.deepStrictEqual(result.pets, [])
        
    // })
    it('El Dao puede obtener a un usuario por email', async function(){
        let mockUser = {
            first_name: 'Federico',
            last_name: 'Osandón',
            email: 'f@gmail.com',
            password: '123456'
        }
        const result = await this.usersDao.save(mockUser)

        const user = await this.usersDao.getBy({email: result.email})
        
        assert.strictEqual(typeof user, 'object')
        
    })
})