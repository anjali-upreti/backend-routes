// To run test use npm test from  root folder
// Make sure the app is running on 3001 port before you run npm test

var url = 'http://localhost:3001';
const request = require('supertest')(url);
const express = require('express');
var assert = require('assert');
var mocha = require('mocha');

const app = express();

describe('First letter occur only once test', function() {
    it(' Positive single occurrence Test scenario ', function(done) {
        var req = request.get('/search/firstnonrepeating/geeksForGeeks');
        req.set('Accept', 'application/json');
        req.end(function(err, res) {
            if(err){
                console.log(err);
            }
            var response = res.text;
            console.log('response', response);
            done();
        });
    });
});

