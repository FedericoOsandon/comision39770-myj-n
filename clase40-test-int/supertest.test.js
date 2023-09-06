const chai = require('chai')
const supertest = require('supertest')

const expect = chai.expect
const requester = supertest('http://localhost:8080')

describe('Testing de adoptame', ()=>{
    describe('Test de mascota', ()=>{
        it('El endpoint de Post /api/pets debe crear una mascota correctamente', async ()=>{
            const petMock = {
                name: 'Patitas', 
                specie: 'Perro',
                birthDate: '10-10-2022'
            }
            const {statusCode, _body, ok} = await requester.post('/api/pets').send(petMock)
            // console.log(statusCode)
            // console.log(_body)
            // console.log(ok)
            expect(_body.payload).to.have.property('_id')
        })
        it('El endpoint de GET /api/pets debe traer todas las mascotas correctamente', async ()=>{
            const {statusCode, _body, ok} = await requester.get('/api/pets')
            // console.log(_body.payload)
            expect(ok).to.be.equal(true)
            expect(statusCode).to.be.equal(200)
        })
        it('El endpoint de GET by id debe traer una mascota correctamente', async ()=>{
            let pid = '64cae6ef0110ed88ccab85f5'
            const response = await requester.get(`/api/pets/${pid}`)
            expect(response.statusCode).to.equal(200)
            expect(response.body.payload).to.have.property('_id')
            expect(response.body.payload._id).to.equal(pid)
        })
    })

    describe('Test de Session', ()=>{
        let cookie
        it('El servicio debe registrar un usuario correctamente', async ()=>{
            let userMock = {
                first_name: 'Fede',
                last_name: 'Osandón',
                email: 'f@gmail.com',
                password: '123456'
            }
            const {_body} = await requester.post('/api/sessions/register').send(userMock)
            console.log(_body)
            expect(_body.payload).to.be.ok
        })
        it('El servicio debe loguear un usuario correctamente y devolver una cookie', async ()=>{
            let userMock = {
                email: 'f@gmail.com',
                password: '123456'
            }

            const result = await requester.post('/api/sessions/login').send(userMock)
            const cookieResult = result.headers['set-cookie'][0]
            // console.log(cookieResult)
            expect(cookieResult).to.be.ok
            // seteado en cookie el jwt
            cookie = {
                name: cookieResult.split('=')[0],
                value: cookieResult.split('=')[1]
            }

            expect(cookie.name).to.be.ok.and.eql('coderCookie')
            expect(cookie.value).to.be.ok
        })
        it('Debe enviar el jwt del usuario y consultar la ruta current', async ()=>{
            const {_body} = await requester.get('/api/sessions/current').set('Cookie', [`${cookie.name}=${cookie.value}`])
            // console.log(_body)
            expect(_body.payload.email).to.be.equal('f@gmail.com')
        })
    })

    describe('Test uploads', ()=>{
        it('El servicio debe crear una mascota con la ruta para imagen', async ()=>{
            const petMock = {
                name: 'Patitas', 
                specie: 'Perro',
                birthDate: '10-10-2022'
            }

            const result = await requester.post('/api/pets/withimage')
                                    .field('name', petMock.name)
                                    .field('specie', petMock.specie)
                                    .field('birthDate', petMock.birthDate)
                                    .attach('image', './test/patitas.jpg')

            expect(result.statusCode).to.be.eql(200)
            expect(result._body.payload).to.have.property('_id')
            expect(result._body.payload.image).to.be.ok

        })
    })
})