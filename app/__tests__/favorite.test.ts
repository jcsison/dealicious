import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;

chai.use(chaiHttp);

describe('favorite api', () => {
  it('gets user favorites', async () => {
    let testUserId = '75a16b5d-14fd-4ca8-9af8-b8d0164e7c88';
    const favoriteRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .get(`/api/favorite/${testUserId}`);

    expect(favoriteRes).to.have.status(200);

    for (let favorite of favoriteRes.body) {
      expect(favorite.userId).to.equal(testUserId);
    }

    let sampleFavorite = favoriteRes.body[0];

    expect(sampleFavorite.id).to.be.a('string');
    expect(sampleFavorite.created_at).to.be.a('string');
    expect(sampleFavorite.productId).to.be.a('string');
    expect(sampleFavorite.userId).to.be.a('string');
  });

  it('adds a user favorite', async () => {
    const addFavoriteRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .post('/api/favorite/')
      .send({
        productId: '71536b38-3adf-465f-a4a4-caf6c1b7d2b9',
        userId: '75a16b5d-14fd-4ca8-9af8-b8d0164e7c88'
      });

    expect(addFavoriteRes).to.have.status(200);
  });

  it('removes a user favorite', async () => {
    const removeFavorite = await chai
      .request(process.env.SERVER_BASE_URL)
      .delete('/api/favorite/remove/bea35d11-91eb-4f67-88a8-039e3e2562e4');

    expect(removeFavorite).to.have.status(200);
  });
});
