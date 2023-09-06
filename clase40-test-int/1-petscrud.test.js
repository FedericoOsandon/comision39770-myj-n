const chai = require("chai");
const supertest = require("supertest");

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('Testing Adoptame', () => {
    let petId;

    describe('Test de mascotas', () => {
        it('El endpoint POST /api/pets debe crear una mascota correctamente', async () => {
            const petMock = {
                name: 'Patitas',
                specie: 'Pez',
                birthDate: '10-10-2022'
            };
            const response = await requester.post('/api/pets').send(petMock);

            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property('payload');
            expect(response.body.payload).to.have.property('_id');

            petId = response.body.payload._id;
        });

        it('El endpoint GET /api/pets/:id debe obtener una mascota correctamente', async () => {
            const response = await requester.get(`/api/pets/${petId}`);

            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property('payload');
            expect(response.body.payload).to.have.property('_id');
            expect(response.body.payload._id).to.equal(petId);
        });

        it('El endpoint PUT /api/pets/:id debe actualizar una mascota correctamente', async () => {
            const updatedPet = {
                name: 'Patitas Modificado',
                specie: 'Perro',
                birthDate: '15-01-2020'
            };
            const response = await requester.put(`/api/pets/${petId}`).send(updatedPet);

            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property('payload');
            expect(response.body.payload).to.have.property('_id');
            expect(response.body.payload._id).to.equal(petId);
            expect(response.body.payload.name).to.equal(updatedPet.name);
            expect(response.body.payload.specie).to.equal(updatedPet.specie);
            expect(response.body.payload.birthDate).to.equal(updatedPet.birthDate);
        });

        it('El endpoint DELETE /api/pets/:id debe eliminar una mascota correctamente', async () => {
            const response = await requester.delete(`/api/pets/${petId}`);

            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property('payload');
            expect(response.body.payload).to.have.property('_id');
            expect(response.body.payload._id).to.equal(petId);
        });
    });
});