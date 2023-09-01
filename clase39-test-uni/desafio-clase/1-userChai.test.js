const mongoose = require('mongoose')
const Users = require('../../src/dao/Users.dao.js')
const chai = require('chai')

const expect = chai.expect

mongoose.connect('mongodb://localhost:27017/adoptame')

// primera parte del test del desafío de clase
describe('Testing User Dao', () => {
  before(function() {
    this.userDao = new Users()
  })

  beforeEach(function() {
    this.timeout(10000)
  })

  it('El dao debe poder obtener', async function() {
    const result = await this.userDao.get({})
    expect(result).to.be.an('array')
  })

  it('El dao debe agregar un usuario correctamente a la base de datos', async function() {
    const mockUser = {
      first_name: "Juan",
      last_name: "Perez",
      password: "123456",
      email: "j@gmail.com"
    }
    const result = await this.userDao.save(mockUser)
    expect(result._id).to.exist
  })

  it('El dao debe agregar un array vacío de mascota por defecto al documento insertado', async function() {
    const mockUser = {
      first_name: "Juan",
      last_name: "Perez",
      password: "123456",
      email: "j@gmail.com"
    }
    const result = await this.userDao.save(mockUser)
    expect(result.pets).to.deep.equal([])
  })

  it('El dao puede obtener un usuario por email', async function() {
    const mockUser = {
      first_name: "Juan",
      last_name: "Perez",
      password: "123456",
      email: "j@gmail.com"
    }
    const result = await this.userDao.save(mockUser)
    const user = await this.userDao.getBy({ email: result.email })
    expect(user).to.be.an('object')
  })

  // borrar todos los usuarios de la base de datos
  beforeEach(function() {
    mongoose.connection.collections.users.drop()
    this.timeout(5000)
  })
})

// test que evalúe que el método update y delete del Dao de usuarios 
describe('Testing User Dao', () => {
  let userDao

  before(async () => {
    userDao = new Users()
    await userDao.save({ first_name: 'John', last_name: 'Doe', email: 'johndoe@example.com' })
  })

  beforeEach(function () {
    this.timeout(10000)
  })

  it('El dao debe poder actualizar un usuario', async () => {
    const userToUpdate = { email: 'johndoe@example.com' }
    const updateData = { first_name: 'Jane' }

    await userDao.update(userToUpdate, updateData)

    const updatedUser = await userDao.getBy(userToUpdate)

    expect(updatedUser.first_name).to.equal('Jane')
  })

  it('El dao debe poder eliminar un usuario', async () => {
    const userToDelete = { email: 'johndoe@example.com' }

    await userDao.delete(userToDelete)

    const deletedUser = await userDao.getBy(userToDelete)

    expect(deletedUser).to.be.null
  })

  // borrar todos los usuarios de la base de datos
  afterEach(async () => {
    await userDao.delete({})
  })

  after(async () => {
    mongoose.connection.collections.users.drop()
    mongoose.connection.close()
  })
})