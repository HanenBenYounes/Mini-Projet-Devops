const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Importation de l'application

const { expect } = chai;
chai.use(chaiHttp);

describe('API Tests', () => {
  // Test de la route principale
  it('should return "Hello, World!" on GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });

  // Test de l'addition avec des nombres valides
  it('should return the correct sum on GET /add?num1=3&num2=4', (done) => {
    chai.request(app)
      .get('/add?num1=3&num2=4')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('result', 7);
        done();
      });
  });

  // Test de l'addition avec des nombres invalides
  it('should return an error for invalid numbers on GET /add', (done) => {
    chai.request(app)
      .get('/add?num1=abc&num2=4')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error', 'Invalid numbers provided');
        done();
      });
  });
});
