var TripSheetsColl = require('./../models/schemas').tripSheetsColl;
var TrucksColl = require('./../models/schemas').TrucksColl;
var async = require('async');


var TripSheets = function(){

};

TripSheets.prototype.createTripSheet = function (req,callback) {
    var retObj = {
      status:false,
      messages:[]
    };
    var today = new Date();
    today = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    TrucksColl.find({accountId:req.params.accountId},function(err,trucks){
        if(err){
            retObj.status = false;
            retObj.messages.push("Error in finding trucks"+JSON.stringify(err));
            callback(retObj);
        }else if(trucks.length>0){
            async.each(trucks,function(truck,asyncCallback){
                var tripSheetObj = {
                    vehicleId : truck._id,
                    accountId:req.params.accountId,
                    date : today
                };
                TripSheetsColl.find(tripSheetObj,function(err,tripSheet){
                    if(err || tripSheet.length>0){
                        asyncCallback(true);
                    }else{
                        var tripSheetDoc = new TripSheetsColl(tripSheetObj);
                        tripSheetDoc.save(function(err,result){
                            if(err){
                                asyncCallback(true);
                            }else{
                                asyncCallback(false);
                            }
                        });
                    }
                });
                },function(err){
                    if(err){
                        retObj.status = false;
                        retObj.messages.push("Error in saving trip sheet");
                        callback(retObj);
                    } else{
                        retObj.status = true;
                        retObj.messages.push("Saved successfully");
                        callback(retObj);
                    }
            });
        }else{
            retObj.status = false;
            retObj.messages.push("No trucks found");
            callback(retObj);
        }
    });
};

TripSheets.prototype.updateTripSheet = function(req,callback){
    var retObj = {
        status:false,
        messages:[]
    };
    var tripSheet = req.body;
    TripSheetsColl.findOneAndUpdate({_id:tripSheet._id},{$set:tripSheet},function(err,result){
        if(err){
            retObj.status = false;
            retObj.messages.push("error in updating trip sheet",JSON.stringify(err));
            callback(retObj);
        }else{
            retObj.status = true;
            retObj.messages.push("Successfully updated");
            callback(retObj);
        }
    });
};

module.exports = new TripSheets();