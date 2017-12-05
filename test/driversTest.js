//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
require('./userLoginTest');
let mongoose = require("mongoose");
let Driver = require('./../server/models/schemas').DriversColl;

//Require the dev-dependencies
let chai = require('chai');
let expect = chai.expect;
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let driverId = "";

chai.use(chaiHttp);
//Our parent block
describe('EasyGaadi Drivers Module', () => {
    beforeEach((done) => { //Before each test we empty the database
        Driver.remove({}, (err) => {            
            done();
        });        
    });    
    /*
    * Test the /POST route Adding Driver Information
    */
    describe('/POST Adding Driver', () => {
        /*
        * Test the /POST route Adding Driver Information Failure
        */
        it('It Throws Error', (done) => {            
            let headerData = {
                "token": token
            };
            let driverData = {
                "fullname": "Kumar",
                "mobile": 9618489859,                
            };

            chai.request(server)
                .post('/v1/drivers')
                .send(driverData)
                .set(headerData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('messages').eql([ 'Invalid full name' ]);                                        
                    done();
                });
        });
        /*
        * Test the /POST route Adding Driver Information Success
        */
        it('It Should Add Driver To Driver Schema', (done) => {            
            let headerData = {
                "token": token
            };
            let driverData = {
                "fullName": "Kumar",
                "mobile": "9618489859",                
            };

            chai.request(server)
                .post('/v1/drivers')
                .send(driverData)
                .set(headerData)
                .end((err, res) => {                    
                    expect(err).to.be.null;
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('messages').eql([ 'Success' ]);
                    res.body.driver.should.have.property('fullName');
                    res.body.driver.should.have.property('mobile');                    
                    driverId = res.body._id;
                    done();
                });
        });
    });
    /*
    * Test the /GET route Retrieving Driver Information
    */
    describe('/GET Retrieving Driver', () => {        
        /*
        * Test the /GET route Retrieving Driver Information Success
        */
        it('It Should Retrive Driver Details From Driver Schema', (done) => {            
            let headerData = {
                "token": token
            };            

            chai.request(server)
                .get('/v1/drivers/account/drivers')                
                .set(headerData)
                .end((err, res) => {    
                    console.log(res.body);                                    
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('messages').eql([ 'Success' ]);
                    res.body.drivers.should.have.property([ 'fullName' ]);
                    res.body.drivers.should.have.property([ 'mobile' ]);                    
                    driverId = res.body._id;
                    done();
                });
        });
    });    
    /*
    * Test the /POST route Updating Driver Information
    */
    describe('/POST Updating Driver', () => {
        /*
        * Test the /POST route Updating Driver Information Failure
        */
        it('It Throws Error', (done) => {            
            let headerData = {
                "token": token
            };
            let driverData = {
                "fullname": "Kumar",
                "mobile": 9618489859,                
            };

            chai.request(server)
                .post('/v1/drivers')
                .send(driverData)
                .set(headerData)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('messages').eql([ 'Invalid full name' ]);                                        
                    done();
                });
        });
        /*
        * Test the /POST route Updating Driver Information Success
        */
        it('It Should Update Driver', (done) => {            
            let headerData = {
                "token": token
            };
            let driverData = {
                "_id": driverId,
                "fullName": "Kumar1",
                "mobile": "9618489859",                
            };

            chai.request(server)
                .post('/v1/drivers')
                .send(driverData)
                .set(headerData)
                .end((err, res) => {                    
                    expect(err).to.be.null;
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('messages').eql([ 'Success' ]);
                    res.body.driver.should.have.property('fullName');
                    res.body.driver.should.have.property('mobile');                    
                    driverId = res.body._id;
                    done();
                });
        });
    });    
});