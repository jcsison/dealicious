import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;

chai.use(chaiHttp);

describe('user api', () => {
  it('logs in a user', async () => {
    const loginRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .post('/api/user/login')
      .send({
        email: process.env.TEST_USER_EMAIL,
        password: process.env.TEST_USER_PASSWORD
      });

    expect(loginRes).to.have.status(200);
  });

  it('registers, then deletes a user', async () => {
    const signupRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .post('/api/user/signup')
      .send({
        first_name: 'TestFirst',
        last_name: 'TestLast',
        email: 'testuser@gmail.com',
        date_of_birth: new Date(),
        password: 'testpass123'
      });

    expect(signupRes).to.have.status(200);

    const deleteRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .delete(`/api/user/delete/${signupRes.body.id}`);

    expect(deleteRes).to.have.status(200);
  });
});
