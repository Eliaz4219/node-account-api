'use strict';

const request = require('supertest');
const app = require('./app.test');
const sinon = require('sinon');
const User = require('node-server-mongodb').schemas.user;

let sandbox;

describe('Account', () => {
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  })

  it('should create a new account', done => {
    sandbox.stub(User, 'create').returns(Promise.resolve(new User()));

    request(app)
      .post('/accounts/create')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });

  it('should fail to create an account', done => {
    sandbox.stub(User, 'create').returns(Promise.reject({
      code: 11000
    }));

    request(app)
      .post('/accounts/create')
      .expect('Content-Type', /json/)
      .expect(400)
      .end(done);
  });
});