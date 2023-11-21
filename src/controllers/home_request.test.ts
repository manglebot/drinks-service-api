import request from 'supertest';
import { app } from '../app';

describe('Test home API endpoint request', () => {
  test('GET should return correct message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Welcome to the Drinks API!');
}); });

// As a user, when I do a GET request to the /coffeelover endpoint, I will see a string message as a response which says I like coffee!

describe('Test /coffeelover endpoint request', () => {
    test('GET should return correct message', async () => {
      const res = await request(app).get('/coffeelover');
      expect(res.statusCode).toEqual(200);
      expect(res.text).toEqual('I like coffee!');
  }); });

