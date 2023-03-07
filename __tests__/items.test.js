const request = require('supertest');

const server = require('../server');
const {connect, getUri, closeDb}= require("../db/index")
const Builder = require("../builders/item-builder")


beforeAll(async ()=>{
    const uri = await getUri();
    await connect({uri});
});

afterAll(async()=>{
    await closeDb();
})

describe('POST /items', () => {
  test('should store new item', async () => {
    const item = Builder.item()

    const response =  await request(server)
        .post('/items')
        .send(item)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201);

        expect(response.body).toEqual({
            ...item,
            _id:'123',
        })
  });
});
