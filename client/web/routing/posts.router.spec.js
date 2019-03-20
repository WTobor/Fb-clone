require('jasmine');
const router = require('./posts.router');
const express = require('express');
const nock = require('nock');
const supertest = require('supertest');

describe('posts', () => {
    it('should have use', () => {
        const app = express();
        spyOn(app, 'use');
        router(app);
        expect(app.use).toHaveBeenCalled();
    });

    it('/posts should have data', () => {
        nock('http://localhost:3000')
        .get('/')
        .reply(200, [
            { id: "aaa", body: "aaa"},
            { id: "bbb", body: "bbb"}
        ]);

        const app = express();
        router(app);
        supertest(app).get('/posts').then((res) =>{
            expect(res.body).toContain({ id: "bbb", body: "bbb"});
            done();
        })
    });

    it('/post/id should have data', () => {
        nock('http://localhost:3000')
        .get('/1')
        .reply(200, { id: "aaa", body: "aaa"});

        const app = express();
        router(app);
        supertest(app).get('/posts/1').then((res) =>{
            expect(res.body).toEqual({ id: "aaa", body: "aaa"});
            done();
        })
    });
 })