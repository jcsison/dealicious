import chai from 'chai';
import chaiHttp from 'chai-http';
import { UserSignup } from '../../web/src/shared/domain';

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

    let loggedInUser = loginRes.body;

    expect(loggedInUser.email).to.equal(process.env.TEST_USER_EMAIL);
    expect(loggedInUser.id).to.be.a('string');
    expect(loggedInUser.created_at).to.be.a('string');
    expect(loggedInUser.first_name).to.be.a('string');
    expect(loggedInUser.last_name).to.be.a('string');

    let dob = new Date(loggedInUser.date_of_birth);
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

    expect(signupRes.body.email).to.equal(newUser.email);
    expect(signupRes.body.first_name).to.equal(newUser.first_name);
    expect(signupRes.body.last_name).to.equal(newUser.last_name);
    expect(signupRes.body.date_of_birth).to.equal(
      newUser.date_of_birth.toJSON()
    );

    const deleteRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .delete(`/api/user/delete/${signupRes.body.id}`);

    expect(deleteRes).to.have.status(200);
  });
});
