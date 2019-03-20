require('jasmine');
const express = require('express');
const supertest = require('supertest');
const router = require('./router');
var bodyParser = require('body-parser');

describe('auth', () => {
    it('should authenticate fail', async () => {

        const credentials = {
            login: "a",
            password: "b"
        };

        const app = express();
        app.use(bodyParser.json());
        router(app);

        supertest(app)
        .post('/login')
        .send(credentials)
        .then((res) => {
            expect(res.body.status).toBe(false);
        });
    });

    it('should authenticate success', async () => {

        const credentials = {
            login: "aaa",
            password: "paa"
        };

        const app = express();
        app.use(bodyParser.json());
        router(app);

        supertest(app)
        .post('/login')
        .send(credentials)
        .then((res) => {
            expect(res.body.status).toBe(false);
        });
    });
 })