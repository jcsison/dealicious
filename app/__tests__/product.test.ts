import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;

chai.use(chaiHttp);

describe('product api', () => {
  it('retrieves all products', async () => {
    const getProductsRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .get('/api/product/');

    expect(getProductsRes).to.have.status(200);
  });

  it('retrieves a specific product', async () => {
    const getProductRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .get('/api/product/908f48dd-ca29-497a-9ea8-295c5177cc98');

    expect(getProductRes).to.have.status(200);
  });
});
