import request from 'supertest';
import App from '../src/App';

describe('GET /', () => {
  let app: App

  beforeAll(() => {
    app = new App();
    app.listen();
  });

  afterAll(() => {
    app.close();
  });

  test('should return a greeting', async () => {
    const res = await request(app.app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Bienvenido a nuestra API');
  });
});