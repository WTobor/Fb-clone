require('jasmine');
const {authenticate} = require('./authenticate');
const express = require('express');
const nock = require('nock');
const supertest = require('supertest');
const router = require('../routing/root.router');

describe('middleware', () => {
    it('should be a function', () => {
        expect(authenticate).toEqual(jasmine.any(Function));
    });

    it('/login should rask', async () => {
        nock('http://localhost:3002')
        .post('/', {user: "a", password: "b"})
        .reply(200, true);

        const app = express();
        router(app);

        const help = {
            next(){}
        };

        spyOn(help, 'next');

        await authenticate({}, {}, () => {
            expect(1).toBe(1);
            done();
        });
        expect(help.next).toHaveBeenCalled();
    });
 })