import mongoose, {connect} from 'mongoose'
import Users from '../src/dao/Users.dao.js'
import chai from 'chai'

const expect = chai.expect

connect('mongodb://localhost:27017/a39770')

describe('Testing Users Dao', ()=>{
    before(function(){
        this.usersDao = new Users()
    })
    beforeEach(function () {
        mongoose.connection.collections.users.drop()
        this.timeout(2000)
    })

    it('El Dao de debe traer(Read) todos los usuarios en formato arreglo', async function(){
        const result = await this.usersDao.get()
        // expect(result).to.be.deep.equal([])
        // expect(Array.isArray(result)).to.be.ok
        // expect(false).to.be.ok
        expect(Array.isArray(result)).to.be.equals(true)
    })
    

})