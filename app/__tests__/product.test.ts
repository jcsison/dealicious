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

    let sampleProduct = getProductsRes.body[0];

    expect(sampleProduct.id).to.be.a('string');
    expect(sampleProduct.created_at).to.be.a('string');
    expect(sampleProduct.name).to.be.a('string');
    expect(sampleProduct.description).to.be.a('string');
    expect(sampleProduct.price).to.be.a('number');
    expect(sampleProduct.image_url).to.be.a('string');
  });

  it('retrieves a specific product', async () => {
    const getProductRes = await chai
      .request(process.env.SERVER_BASE_URL)
      .get('/api/product/908f48dd-ca29-497a-9ea8-295c5177cc98');

    expect(getProductRes).to.have.status(200);

    expect(getProductRes.body.id).to.be.a('string');
    expect(getProductRes.body.created_at).to.be.a('string');
    expect(getProductRes.body.name).to.be.a('string');
    expect(getProductRes.body.description).to.be.a('string');
    expect(getProductRes.body.price).to.be.a('number');
    expect(getProductRes.body.image_url).to.be.a('string');
  });
});
