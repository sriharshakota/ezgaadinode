var express = require('express');
var AuthRouter = express.Router();
var Accounts = require('../apis/accountsApi');
var logger = require('./../winston/logger')(module);

AuthRouter.post('/accounts/add', function (req, res) {
    Accounts.addAccount(req.jwt, req.body,req, function (result) {
        res.json(result);
    });
});

AuthRouter.get('/accounts/fetch', function (req, res) {
    Accounts.getAccounts(req.jwt, req.query,req, function (result) {
        res.json(result);
    });
});

AuthRouter.get('/accounts/fetchAllAccounts', function (req, res) {
    Accounts.getAllAccounts(req,function (result) {
        res.json(result);
    });
});

AuthRouter.get('/accounts/getAllAccountsForDropdown', function (req, res) {
    Accounts.getAllAccountsForDropdown(req, function (result) {
        res.json(result);
    });
});

AuthRouter.get('/accounts/:accountId', function (req, res) {
    Accounts.getAccountDetails(req.params.accountId,req, function (result) {
        res.json(result);
    });
});

AuthRouter.put('/accounts/update', function (req, res) {
    Accounts.updateAccount(req.jwt, req.body,req, function (result) {
        res.json(result);
    });
});
AuthRouter.put('/accounts/newUpdate', function (req, res) {
    Accounts.updateNewAccount(req.jwt, req.body,req, function (result) {
        res.json(result);
    });
});
AuthRouter.get('/accounts/total/count',function(req,res){
    Accounts.countAccounts(req.jwt,req,function(result){
        res.send(result);
    });
});

AuthRouter.get('/erpDashboard', function (req, res) {
    Accounts.erpDashBoardContent(req.jwt,req, function (result) {
        res.json(result);
    });
});

AuthRouter.get('/userProfile', function (req, res) {
    Accounts.userProfile(req.jwt,req, function (result) {
        res.json(result);
    });
});

AuthRouter.post('/uploadUserProfilePic', function (req, res) {
    Accounts.uploadUserProfilePic(req.jwt.accountId, req.body,req, function (result) {
        res.json(result);
    });
});

AuthRouter.get('/getErpSettings', function (req, res) {
    Accounts.getErpSettings(req.jwt,req, function (result) {
        res.json(result);
    });
});

AuthRouter.get('/getHomeLocation', function (req, res) {
    Accounts.getAccountHomeLocation(req.jwt,req, function (result) {
        res.json(result);
    });
});

AuthRouter.put('/updateErpSettings', function (req, res) {
    Accounts.updateErpSettings(req.body,req, function (result) {
        res.json(result);
    });
});

AuthRouter.get('/getEmployees', function (req, res) {
    Accounts.getEmployees(req, function (result) {
        res.send(result);
    });
});

AuthRouter.get('/getAccountRoutes', function (req, res) {
    Accounts.getAccountRoutes(req, function (result) {
        res.send(result);
    });
});

AuthRouter.post('/updateAccountRoutes', function (req, res) {
    Accounts.updateAccountRoutes(req, function (result) {
        res.send(result);
    });
});

AuthRouter.delete('/deleteOperatingRoutes',function (req,res) {
   Accounts.deleteOperatingRoutes(req,function (result) {
       res.send(result);
   })
});

module.exports = {
    AuthRouter: AuthRouter
};

