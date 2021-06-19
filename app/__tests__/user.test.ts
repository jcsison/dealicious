import chai from 'chai';
import chaiHttp from 'chai-http';
import { User, UserSignup } from '../../web/src/shared/domain';

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

    const loggedInUser: User = loginRes.body;

    expect(loggedInUser.id).to.be.a('string');
    expect(loggedInUser.created_at).to.be.a('string');
    expect(loggedInUser.email).to.equal(process.env.TEST_USER_EMAIL);
    expect(loggedInUser.first_name).to.be.a('string');
    expect(loggedInUser.last_name).to.be.a('string');

    const dob = new Date(loggedInUser.date_of_birth);

    expect(dob.toString()).to.not.equal('Invalid Date');
  });

  it('registers, then deletes a user', async () => {
    const newUser: UserSignup = {
      first_name: 'TestFirst',
      last_name: 'TestLast',
      email: 'testuser@gmail.com',
      date_of_birth: new Date(),
      password: 'testpass123'
    };

    const signupRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .post('/api/user/signup')
      .send(newUser);

    expect(signupRes).to.have.status(200);

    const signupUser: User = signupRes.body;

    expect(signupUser.email).to.equal(newUser.email);
    expect(signupUser.first_name).to.equal(newUser.first_name);
    expect(signupUser.last_name).to.equal(newUser.last_name);
    expect(signupUser.date_of_birth).to.equal(newUser.date_of_birth.toJSON());

    const deleteRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .delete(`/api/user/delete/${signupRes.body.id}`);

    expect(deleteRes).to.have.status(200);
  });
});
