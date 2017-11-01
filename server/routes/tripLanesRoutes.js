var express = require('express');
var OpenRouter = express.Router();
var AuthRouter = express.Router();
var TripLanes = require('../apis/tripLanesApi');

AuthRouter.post('/', function (req, res) {
    TripLanes.addTripLane(req.jwt, req.body, function (result) {
        res.send(result);
    });
});
AuthRouter.get('/', function (req, res) {
    TripLanes.getAllTripLanes(function (result) {
        res.send(result);
    });
});
AuthRouter.get('/:pageNumber', function (req, res) {
    TripLanes.getTripLanes(req.jwt, req.body, req.params.pageNumber, function (result) {
        res.send(result);
    });
});
AuthRouter.put('/', function (req, res) {
    TripLanes.updateTripLane(req.jwt, req.body, function (result) {
        res.send(result);
    });
});
AuthRouter.get('/update/:tripLaneId', function (req, res) {
    TripLanes.findTripLane(req.jwt,req.params.tripLaneId, function (result) {
        res.send(result);
    });
});
AuthRouter.delete('/:tripId', function (req, res) {
    TripLanes.deleteTripLane(req.params.tripId, function (result) {
        res.send(result);
    });
});
module.exports = {
    OpenRouter: OpenRouter,
    AuthRouter: AuthRouter
};