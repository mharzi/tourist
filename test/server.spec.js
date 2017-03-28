'use strict';

const expect = require('expect');
const request = require('supertest');
const app = require('../app');

describe('server', function () {
    it('404 url', function done() {
        request(app).get('/nowhere').expect(404, done);
    });

    it('should return expected JSON on start', function done() {
        const expectedCities = ['Paris', 'Liverpool', 'York', 'Las Vegas', 'Beijing'];

        request(app)
            .get('/visits')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                const result = res.body;
                expect(result.length).toBe(5);
                expect(result.map(r.City)).toEqual(expectedCities);
                done();
            });
    });
});