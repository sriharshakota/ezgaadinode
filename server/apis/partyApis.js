"use strict";
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var _ = require('underscore');
var async = require('async');
var PartyCollection = require('./../models/schemas').PartyCollection;
var config = require('./../config/config');
var Utils = require('./utils');
var Trips = require('./tripsApi');
var PaymentsReceived = require('./receiptsApi');
var emailService = require('./mailerApi');

var ExpenseCostColl = require('./expensesApi');
var TripCollection = require('./../models/schemas').TripCollection;
var ExpenseCostColl1 = require('./../models/schemas').ExpenseCostColl;
var analyticsService = require('./../apis/analyticsApi');
var serviceActions = require('./../constants/constants');
const ObjectId = mongoose.Types.ObjectId;
var Party = function () {};

function value(x) {
    if (x) {
        return x;
    } else {
        return '--';
    }
}
Party.prototype.addParty = function (jwt, partyDetails, req, callback) {

    var result = {
        messages: [],
        status: true
    };

    if (!_.isObject(partyDetails) || _.isEmpty(partyDetails)) {
        result.status = false;
        result.messages.push(" Please fill all the required details for party");
    }
    if (!partyDetails.name || !_.isString(partyDetails.name)) {
        result.status = false;
        result.messages.push(" Please provide valid party name");
    }
    // if (!Utils.isValidPhoneNumber(partyDetails.contact)) {
    //     result.status = false;
    //     result.messages.push(" Please provide valid contact number for party type");
    // }
    //
    // if (!partyDetails.partyType) {
    //     result.status = false;
    //     result.messages.push(" Please select party type");
    // }
    //
    // if (partyDetails.partyType === 'Load Owner') {
    //     if (!partyDetails.isSms && !partyDetails.isEmail) {
    //         result.status = false;
    //         result.messages.push(" Please select notification type");
    //     }
    //     if (partyDetails.tripLanes && partyDetails.tripLanes.length > 0) {
    //         for (var i = 0; i < partyDetails.tripLanes.length; i++) {
    //             if (!partyDetails.tripLanes[i].name) {
    //                 result.status = false;
    //                 result.messages.push('Please provide TripLane Name');
    //             }
    //
    //             if (!partyDetails.tripLanes[i].from) {
    //                 result.status = false;
    //                 result.messages.push('Please provide From Name');
    //             }
    //
    //             if (!partyDetails.tripLanes[i].to) {
    //                 result.status = false;
    //                 result.messages.push('Please provide To Name');
    //             }
    //         }
    //     }
    //     /* else {
    //                 result.status = false;
    //                 result.messages.push('Please add triplane');
    //             }*/
    // } else {
    //     partyDetails.tripLanes = [];
    // }


    if (result.status === false) {
        analyticsService.create(req, serviceActions.add_party_err, {
            body: JSON.stringify(req.body),
            accountId: jwt.id,
            success: false,
            messages: result.message
        }, function (response) {});
        callback(result);
    } else {
        partyDetails.createdBy = jwt.id;
        partyDetails.updatedBy = jwt.id;
        partyDetails.accountId = jwt.accountId;

        var partyDoc = new PartyCollection(partyDetails);
        partyDoc.save(function (err, party) {
            if (err) {
                result.status = false;
                result.messages.push("Error while adding party, try Again");
                result.error = err;
                analyticsService.create(req, serviceActions.add_party_err, {
                    body: JSON.stringify(req.body),
                    accountId: jwt.id,
                    success: false,
                    messages: result.messages
                }, function (response) {});
                callback(result);
            } else {
                result.status = true;
                result.messages.push("Party Added Successfully");
                result.party = party;
                analyticsService.create(req, serviceActions.add_party, {
                    body: JSON.stringify(req.body),
                    accountId: jwt.id,
                    success: true
                }, function (response) {});
                callback(result);
            }
        });
    }
};

Party.prototype.findParty = function (jwt, partyId, req, callback) {
    var result = {};
    var condition = {};
    if (jwt.type === "account") {
        condition = {
            _id: partyId,
            'accountId': jwt.accountId
        };
    } else {
        condition = {
            _id: partyId,
            'createdBy': jwt.id
        };
    }
    PartyCollection.findOne(condition, function (err, party) {
        if (err) {
            result.status = false;
            result.message = "Error while finding party, try Again";
            result.error = err;
            analyticsService.create(req, serviceActions.find_party_err, {
                body: JSON.stringify(req.params),
                accountId: jwt.id,
                success: false,
                messages: result.message
            }, function (response) {});
            callback(result);
        } else if (party) {
            result.status = true;
            result.message = "Party found successfully";
            result.party = party;
            analyticsService.create(req, serviceActions.find_party, {
                body: JSON.stringify(req.params),
                accountId: jwt.id,
                success: true
            }, function (response) {});
            callback(result);
        } else {
            result.status = false;
            result.message = "Unauthorized access or Party is not found!";
            analyticsService.create(req, serviceActions.find_party_err, {
                body: JSON.stringify(req.params),
                accountId: jwt.id,
                success: false,
                messages: result.message
            }, function (response) {});
            callback(result);
        }
    });
};


Party.prototype.updateParty = function (jwt, partyDetails, req, callback) {
    var result = {
        status: false,
        messages: []
    };
    console.log("update party......",partyDetails);
    var giveAccess = false;
    if (jwt.type === "account" && partyDetails.accountId === jwt.accountId) {
        giveAccess = true;
    } else if (jwt.type === "group" && partyDetails.createdBy === jwt.id) {
        giveAccess = true;

    } else {
        result.status = false;
        result.messages.push("Unauthorized access");
        analyticsService.create(req, serviceActions.update_party_err, {
            body: JSON.stringify(req.body),
            accountId: jwt.id,
            success: false,
            messages: result.messages
        }, function (response) {});
        callback(result);
    }
    if (giveAccess) {
        /* , accountId: jwt.accountId*/
        PartyCollection.findOneAndUpdate({
            _id: partyDetails._id
        }, {
            $set: {
                "name": partyDetails.name,
                "contact": partyDetails.contact,
                "email": partyDetails.email,
                "city": partyDetails.city,
                "tripLanes": partyDetails.tripLanes,
                "updatedBy": jwt.id,
                "partyType": partyDetails.partyType,
                "isSms": partyDetails.isSms,
                "isEmail": partyDetails.isEmail,
                "gstNo": partyDetails.gstNo,
                "anjanaPartyType":partyDetails.anjanaPartyType
            }
        }, {
            new: true
        }, function (err, party) {
            if (err) {
                result.status = false;
                result.messages.push("Error while updating party, try Again");
                analyticsService.create(req, serviceActions.update_party_err, {
                    body: JSON.stringify(req.body),
                    accountId: jwt.id,
                    success: false,
                    messages: result.messages
                }, function (response) {});
                callback(result);
            } else if (party) {
                result.status = true;
                result.messages.push("Party updated successfully");
                result.party = party;
                analyticsService.create(req, serviceActions.update_party, {
                    body: JSON.stringify(req.body),
                    accountId: jwt.id,
                    success: true
                }, function (response) {});
                callback(result);
            } else {
                result.status = false;
                result.messages.push("Error, finding party");
                analyticsService.create(req, serviceActions.update_party_err, {
                    body: JSON.stringify(req.body),
                    accountId: jwt.id,
                    success: false,
                    messages: result.messages
                }, function (response) {});
                callback(result);
            }
        });
    }
};

Party.prototype.getAccountParties = function (jwt, params, req, callback) {
    var retObj = {
        status: false,
        messages: []
    };
    var condition = {};
    if (!params.page) {
        params.page = 1;

    }
    var skipNumber = (params.page - 1) * params.size;
    var limit = params.size ? parseInt(params.size) : Number.MAX_SAFE_INTEGER;
    var sort = params.sort ? JSON.parse(params.sort) : {
        createdAt: -1
    };

    if (!params.partyName) {
        condition = {
            accountId: jwt.accountId
        }
    } else {
        condition = {
            accountId: jwt.accountId,
            name: params.partyName
        }
    }

    async.parallel({
        parties: function (partiesCallback) {
            PartyCollection
                .find(condition)
                .sort(sort)
                .skip(skipNumber)
                .limit(limit)
                .lean()
                .exec(function (err, parties) {
                    async.parallel({
                        createdbyname: function (createdbyCallback) {
                            Utils.populateNameInUsersColl(parties, "createdBy", function (response) {
                                createdbyCallback(response.err, response.documents);
                            });
                        }
                        // rolesname:
                    }, function (populateErr, populateResults) {
                        partiesCallback(populateErr, populateResults);
                    });
                });
        },
        count: function (countCallback) {
            PartyCollection.count({
                accountId: jwt.accountId
            }, function (err, count) {
                countCallback(err, count);
            });
        }
    }, function (err, results) {
        if (err) {
            retObj.messages.push('Error retrieving parties');
            analyticsService.create(req, serviceActions.get_account_parties_err, {
                body: JSON.stringify(req.query),
                accountId: jwt.id,
                success: false,
                messages: retObj.messages
            }, function (response) {});
            callback(retObj);
        } else {
            retObj.status = true;
            retObj.messages.push('Success');
            retObj.count = results.count;
            retObj.userId = jwt.id;
            retObj.userType = jwt.type;
            retObj.parties = results.parties.createdbyname;
            analyticsService.create(req, serviceActions.get_account_parties, {
                body: JSON.stringify(req.query),
                accountId: jwt.id,
                success: true
            }, function (response) {});
            callback(retObj);

        }
    });
};

Party.prototype.getAllParties = function (req, callback) {
    var retObj = {
        status: false,
        messages: []
    };

    PartyCollection.find({}, function (err, parties) {
        if (err) {
            retObj.message.push('Error getting parties');
            analyticsService.create(req, serviceActions.get_all_parties_err, {
                accountId: req.jwt.id,
                success: false,
                messages: retObj.messages
            }, function (response) {});
            callback(retObj);
        } else {
            Utils.populateNameInUsersColl(parties, "createdBy", function (response) {
                if (response.status) {
                    retObj.status = true;
                    retObj.messages.push('Success');
                    retObj.parties = response.documents;
                    analyticsService.create(req, serviceActions.get_all_parties, {
                        accountId: req.jwt.id,
                        success: true
                    }, function (response) {});
                    callback(retObj);
                } else {
                    retObj.messages.push('Error getting parties');
                    analyticsService.create(req, serviceActions.get_all_parties_err, {
                        accountId: req.jwt.id,
                        success: false,
                        messages: retObj.messages
                    }, function (response) {});
                    callback(retObj);
                }
            });
        }
    });
};
Party.prototype.getAllPartiesBySupplier = function (jwt, req, callback) {
    var retObj = {
        status: false,
        messages: []
    };
    var condition = {};
    PartyCollection.find({
        partyType: 'Supplier',
        'accountId': jwt.accountId
    }, function (err, parties) {
        if (err) {
            retObj.message.push('Error getting parties');
            analyticsService.create(req, serviceActions.get_parties_by_supp_err, {
                accountId: jwt.id,
                success: false,
                messages: retObj.message
            }, function (response) {});
            callback(retObj);
        } else if (parties) {
            Utils.populateNameInUsersColl(parties, "createdBy", function (response) {
                if (response.status) {
                    retObj.status = true;
                    retObj.messages.push('Success');
                    retObj.parties = response.documents;
                    analyticsService.create(req, serviceActions.get_parties_by_supp, {
                        accountId: jwt.id,
                        success: true
                    }, function (response) {});
                    callback(retObj);
                } else {
                    retObj.messages.push('Error getting parties');
                    analyticsService.create(req, serviceActions.get_parties_by_supp_err, {
                        accountId: jwt.id,
                        success: false,
                        messages: retObj.message
                    }, function (response) {});
                    callback(retObj);
                }
            });
        } else {
            retObj.message.push('No Parties Found');
            analyticsService.create(req, serviceActions.get_parties_by_supp_err, {
                accountId: jwt.id,
                success: false,
                messages: retObj.message
            }, function (response) {});
            callback(retObj);
        }
    });
};

Party.prototype.getAllPartiesByTransporter = function (jwt, req, callback) {
    var retObj = {
        status: false,
        messages: []
    };
    //PartyCollection.find({partyType: {$in:['Load Owner','Commission']}, accountId: jwt.accountId},{partyType:1,name:1,tripLanes:1}, function (err, parties) {
    PartyCollection.find({
        accountId: jwt.accountId
    }, {
        partyType: 1,
        name: 1,
        tripLanes: 1
    }, function (err, parties) {
        if (err) {
            retObj.message.push('Error getting parties');
            analyticsService.create(req, serviceActions.get_parties_by_trans_err, {
                accountId: jwt.id,
                success: false,
                messages: retObj.message
            }, function (response) {});
            callback(retObj);
        } else {
            Utils.populateNameInUsersColl(parties, "createdBy", function (response) {
                if (response.status) {
                    retObj.status = true;
                    retObj.messages.push('Success');
                    retObj.parties = response.documents;
                    analyticsService.create(req, serviceActions.get_parties_by_trans, {
                        accountId: jwt.id,
                        success: true
                    }, function (response) {});
                    callback(retObj);
                } else {
                    retObj.messages.push('Error getting parties');
                    analyticsService.create(req, serviceActions.get_parties_by_trans_err, {
                        accountId: jwt.id,
                        success: false,
                        messages: retObj.message
                    }, function (response) {});
                    callback(retObj);
                }
            });
        }
    });
};

Party.prototype.deleteParty = function (jwt, partyId, req, callback) {
    var result = {
        status: false,
        messages: []
    };

    PartyCollection.remove({
        _id: partyId,
        accountId: jwt.accountId
    }, function (err, retValue) {
        if (err) {
            result.status = false;
            result.messages.push('Error deleting party');
            analyticsService.create(req, serviceActions.del_party_err, {
                body: JSON.stringify(req.params),
                accountId: jwt.id,
                success: false,
                messages: result.messages
            }, function (response) {});
            callback(result);
        } else if (retValue.result && retValue.result.n === 1) {
            result.status = true;
            result.messages.push('Success');
            analyticsService.create(req, serviceActions.del_party, {
                body: JSON.stringify(req.params),
                accountId: jwt.id,
                success: true
            }, function (response) {});
            callback(result);
        } else {
            result.status = false;
            result.messages.push('Unauthorized access or Error deleting party');
            analyticsService.create(req, serviceActions.del_party_err, {
                body: JSON.stringify(req.params),
                accountId: jwt.id,
                success: false,
                messages: result.messages
            }, function (response) {});
            callback(result);
        }
    });

};
Party.prototype.countParty = function (jwt, params, req, callback) {
    var result = {};
    var condition = {};
    if (params.partyName) {
        condition = {
            'accountId': jwt.accountId,
            name: params.partyName
        };
    } else {
        condition = {
            accountId: jwt.accountId
        };
    }
    PartyCollection.count(condition, function (err, data) {
        if (err) {
            result.status = false;
            result.message = 'Error getting count';
            analyticsService.create(req, serviceActions.count_party_err, {
                accountId: jwt.id,
                success: false,
                messages: result.message
            }, function (response) {});
            callback(result);
        } else {
            result.status = true;
            result.message = 'Success';
            result.count = data;
            analyticsService.create(req, serviceActions.count_party, {
                accountId: jwt.id,
                success: true
            }, function (response) {});
            callback(result);
        }
    })
};

/**
 * Find trips and parties combined for a party
 * @param jwt
 * @param partyId
 * @param callback
 */
Party.prototype.findTripsAndPaymentsForParty = function (jwt, partyId, req, callback) {
    var retObj = {
        status: false,
        messages: []
    };
    var totalFreight = 0;
    var totalPaid = 0;
    async.parallel({
        trips: function (tripsCallback) {
            Trips.findTripsByParty(jwt, partyId, req, function (tripsResults) {
                tripsCallback(tripsResults.error, tripsResults.trips);
            });
        },
        payments: function (paymentsCallback) {
            PaymentsReceived.findPartyPayments(jwt, partyId, function (partyResults) {
                paymentsCallback(partyResults.error, partyResults.payments);
            });
        }
    }, function (error, tripsAndPayments) {
        if (error) {
            retObj.status = true;
            retObj.messages.push(JSON.stringify(error));
            analyticsService.create(req, serviceActions.find_trips_and_pymnts_for_parties_err, {
                body: JSON.stringify(req.params),
                accountId: jwt.id,
                success: false,
                messages: retObj.messages
            }, function (response) {});
            callback(retObj);
        } else {
            retObj.status = true;
            retObj.messages.push('Success');
            retObj.receipts = tripsAndPayments.payments;
            retObj.trips = tripsAndPayments.trips;

            if (tripsAndPayments.trips) {
                for (var i = 0; i < retObj.trips.length; i++) {
                    if (retObj.trips[i].freightAmount) {
                        totalFreight = totalFreight + retObj.trips[i].freightAmount;
                    }

                }
                for (var i = 0; i < retObj.receipts.length; i++) {

                    if (retObj.receipts[i].amount) {
                        totalPaid = totalPaid + retObj.receipts[i].amount;
                    }
                }
                retObj.totalPendingPayments = {
                    totalFreight: totalFreight,
                    totalPaid: totalPaid
                }
            }
            /* if (retObj.results) {
                 retObj.results = retObj.results.sort(function (x, y) {
                     return x.date > y.date ? 1 : -1;
                 });
             }*/
            analyticsService.create(req, serviceActions.find_trips_and_pymnts_for_parties, {
                body: JSON.stringify(req.params),
                accountId: jwt.id,
                success: true
            }, function (response) {});
            callback(retObj);
        }
    });
}

/*
 * Retrieve trips and expenses details based on vehicle number
 * */

Party.prototype.findTripsAndPaymentsForVehicle = function (jwt, vehicleId, req, callback) {
    var retObj = {
        status: false,
        messages: []
    };
    async.parallel({
        trips: function (tripsCallback) {
            Trips.findTripsByVehicle(jwt, vehicleId, req, function (tripsResults) {
                tripsCallback(tripsResults.error, tripsResults.trips);
            });
        },
        expenses: function (expensesCallback) {
            ExpenseCostColl.findVehicleExpenses(jwt, vehicleId, req, function (expensesResults) {
                expensesCallback(expensesResults.error, expensesResults.expenses);
            });
        },
    }, function (error, tripsAndExpenses) {
        var totalFreight = 0;
        var totalExpenses = 0;
        if (error) {
            retObj.status = true;
            retObj.messages.push(JSON.stringify(error));
            analyticsService.create(req, serviceActions.find_trips_and_pymnts_for_veh_err, {
                body: JSON.stringify(req.params),
                accountId: jwt.id,
                success: false,
                messages: retObj.messages
            }, function (response) {});
            callback(retObj);
        } else {
            retObj.status = true;
            retObj.messages.push('Success');
            // retObj.trips = tripsAndExpenses.expenses;


            for (var i = 0; i < tripsAndExpenses.trips.length; i++) {
                totalFreight = totalFreight + tripsAndExpenses.trips[i].freightAmount;
            }
            for (var i = 0; i < tripsAndExpenses.expenses.length; i++) {
                if (tripsAndExpenses.expenses[i].mode === 'Cash') {
                    totalExpenses = totalExpenses + tripsAndExpenses.expenses[i].cost;

                } else {
                    totalExpenses = totalExpenses + tripsAndExpenses.expenses[i].totalAmount;
                    tripsAndExpenses.expenses[i].cost = tripsAndExpenses.expenses[i].totalAmount;
                }
            }
            Utils.populateNameInPartyColl(tripsAndExpenses.trips, "partyId", function (partyDocuments) {
                retObj.trips = partyDocuments.documents;
                retObj.expenses = tripsAndExpenses.expenses;
                /*if (retObj.trips) {
                    retObj.trips = retObj.trips.sort(function (x, y) {
                        return x.date < y.date ? 1 : -1;
                    });
                }*/
                retObj.totalRevenue = {
                    totalFreight: totalFreight,
                    totalExpenses: totalExpenses
                };
                analyticsService.create(req, serviceActions.find_trips_and_pymnts_for_veh, {
                    body: JSON.stringify(req.params),
                    accountId: jwt.id,
                    success: true
                }, function (response) {});
                callback(retObj);
            });

        }
    });
};

Party.prototype.getAllPartiesForFilter = function (jwt, req, callback) {
    var retObj = {
        status: false,
        messages: []
    };

    PartyCollection.find({
        'accountId': jwt.accountId
    }, function (err, data) {
        if (err) {
            retObj.status = false;
            retObj.messages.push('Error getting Parties');
            analyticsService.create(req, serviceActions.get_all_parties_for_filter_err, {
                accountId: jwt.id,
                success: false,
                messages: result.messages
            }, function (response) {});
            callback(retObj);
        } else if (data) {
            retObj.status = true;
            retObj.messages.push('Success');
            retObj.parties = data;
            analyticsService.create(req, serviceActions.get_all_parties_for_filter, {
                accountId: jwt.id,
                success: true
            }, function (response) {});
            callback(retObj);
        } else {
            retObj.status = false;
            retObj.messages.push('No Parties Found');
            analyticsService.create(req, serviceActions.get_all_parties_for_filter_err, {
                accountId: jwt.id,
                success: false,
                messages: result.messages
            }, function (response) {});
            callback(retObj);
        }
    });
};
Party.prototype.shareDetailsViaEmail = function (jwt, params, req, callback) {
    var retObj = {
        status: false,
        messages: []
    };
    if (!params.email || !Utils.isEmail(params.email)) {
        retObj.messages.push("Invalid email....");
        callback(retObj);
    } else {
        Party.prototype.getAccountParties(jwt, params, req, function (response) {
            if (response.status) {
                var output = [];
                if (response.parties.length) {
                    for (var i = 0; i < response.parties.length; i++) {
                        output.push({
                            name: response.parties[i].name,
                            contact: response.parties[i].contact,
                            email: value(response.parties[i].email),
                            city: value(response.parties[i].city),
                            partyType: response.parties[i].partyType
                        });
                        if (i === response.parties.length - 1) {
                            var emailparams = {
                                templateName: 'partyDetails',
                                subject: "Party Details",
                                to: params.email,
                                data: output
                            };
                            emailService.sendEmail(emailparams, function (emailResponse) {
                                if (emailResponse.status) {
                                    retObj.status = true;
                                    retObj.messages.push(' Details shared successfully');
                                    callback(retObj);
                                } else {
                                    callback(emailResponse);
                                }
                            });
                        }
                    }
                } else {
                    retObj.messages.push("No parties found....");
                    retObj.status = false;
                    callback(retObj);
                }

            } else {
                callback(response);

            }
        })
    }

};
Party.prototype.downloadDetails = function (jwt, params, req, callback) {
    var retObj = {
        status: false,
        messages: []
    };

    console.log("share details download....");
    Party.prototype.getAccountParties(jwt, params, req, function (response) {
        console.log("response....", response);
        if (response.status) {
            var output = [];
            for (var i = 0; i < response.parties.length; i++) {
                output.push({
                    Party_Name: response.parties[i].name,
                    Contact: response.parties[i].contact,
                    Email: response.parties[i].email,
                    City: response.parties[i].city,
                    Party_Type: response.parties[i].partyType
                });
            }
            retObj.data = output;
            retObj.status = true;
            retObj.messages.push("successful..");
            callback(retObj);
        } else {
            callback(retObj);
        }
    })
};

module.exports = new Party();