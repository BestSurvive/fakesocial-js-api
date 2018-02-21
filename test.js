var assert = require('assert');
var request = require('supertest');
var app = require('./app');


describe('POST', function () {
  it('sign up user', function (done) {
    request(app)
      .post('/users/add?token=pippo')
      .send({name:"Luca"})
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  it('add post user', function (done) {
    request(app)
      .post('/users/addpost/1?token=pippo')
      .send({mes:"Hello"})
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  it('send request friendship', function (done) {
    request(app)
      .post('/users/sendReq?token=pippo')
      .send({idE:1, idR:2})
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  it('conferm friendship', function (done) {
    request(app)
      .post('/users/conferme?token=pippo')
      .send({id:1, idFriend:2})
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('DELETE', function () {
    it('del post user', function (done) {
      request(app)
        .delete('/users/delPost/1/1?token=pippo')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    });
    it('del Friendship', function (done) {
        request(app)
          .delete('/users/delFriend/1/2?token=pippo')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);
            done();
          });
      });
      it('del sendFriend', function (done) {
        request(app)
          .delete('/users/delReq/1/2?token=pippo')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);
            done();
          });
      });
});

describe('GET', function () {
  it('all user', function (done) {
    request(app)
      .get('/users/list?token=pippo')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  it('post user if friend', function (done) {
    request(app)
      .get('/users/friendPost/1/2?token=pippo')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  it('all token', function (done) {
    request(app)
      .get('/users/tokens?token=pippo')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});