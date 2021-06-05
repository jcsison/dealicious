import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;

chai.use(chaiHttp);

describe('user api', () => {
  it('logs in a user', async () => {
    const loginRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .post('/user/login')
      .send({
        email: process.env.TEST_USER_EMAIL,
        password: process.env.TEST_USER_PASSWORD
      });

    expect(loginRes).to.have.status(200);
  });
});
