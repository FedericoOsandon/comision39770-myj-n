// creando una instancia de app otra forma de resolver. Se puede sacar lo escencial como usamos en clase


const { expect } = require('chai');
const supertest = require('supertest');
const jwt = require('jsonwebtoken');
const express = require('express');
const sessionsRouter = require('../src/routes/sessions.router');
const sessionsController = require('../src/controllers/sessions.controller');

// Mock del servicio de usuarios
const usersServiceMock = {
  getUserByEmail: (email) => {
    // Implementa aquí la lógica para obtener un usuario por email desde el mock de la base de datos
    // Puedes devolver un usuario de prueba para el propósito del test
    const user = {
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      password: 'hashedPassword',
    };
    return Promise.resolve(user);
  },
};

describe('Sessions Router', () => {
  let app;

  before(() => {
    app = express();
    app.use(express.json());
    app.use('/api/sessions', sessionsRouter(usersServiceMock));
  });

  describe('POST /api/sessions/unprotectedLogin', () => {
    it('should return a cookie named "unprotectedCookie"', (done) => {
      supertest(app)
        .post('/api/sessions/unprotectedLogin')
        .send({ email: 'test@example.com', password: 'password' })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          const cookieHeader = res.headers['set-cookie'];
          expect(cookieHeader).to.be.an('array').that.is.not.empty;
          expect(cookieHeader[0]).to.include('unprotectedCookie');

          done();
        });
    });
  });

  describe('GET /api/sessions/unprotectedCurrent', () => {
    it('should return the complete user object stored in the database', (done) => {
      // Simulamos la creación de un token JWT para el usuario
      const token = jwt.sign({ email: 'test@example.com' }, 'tokenSecretJWT');
      const cookie = `unprotectedCookie=${token}`;

      supertest(app)
        .get('/api/sessions/unprotectedCurrent')
        .set('Cookie', [cookie])
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          const user = res.body;
          expect(user).to.have.property('first_name', 'Test');
          expect(user).to.have.property('last_name', 'User');
          expect(user).to.have.property('email', 'test@example.com');

          done();
        });
    });
  });
});