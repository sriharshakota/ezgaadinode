app.factory('TripLaneServices', function ($http) {
    return {
        addTripLane: function (tripLane, success, error) {
            $http({
                url: '/v1/tripLanes/',
                method: "POST",
                data: tripLane
            }).then(success, error)
        },
        getTripLanes: function (success, error) {
            $http({
                url: '/v1/tripLanes/',
                method: "GET"
            }).then(success, error)
        },
        getTripLane: function (tripLaneId, success, error) {
            $http({
                url: '/v1/tripLanes/' + tripLaneId,
                method: "GET"
            }).then(success, error)
        },
        updateTripLane: function (tripLane, success, error) {
            $http({
                url: '/v1/tripLanes/',
                method: "PUT",
                data: tripLane
            }).then(success, error)
        },
        deleteTripLane: function (tripLaneId, success, error) {
            $http({
                url: '/v1/tripLanes/'+tripLaneId,
                method: "DELETE"
            }).then(success, error)
        }
    }
});

app.controller('ShowTripLanesCtrl', ['$scope', '$uibModal', 'TripLaneServices', '$state','Notification', function ($scope, $uibModal, TripLaneServices, $state, Notification) {
    $scope.goToEditTripLanePage = function (tripLaneId) {
        $state.go('tripLanesEdit', {tripLaneId: tripLaneId});
    };

    // pagination options
    $scope.totalItems = 200;
    $scope.maxSize = 5;
    $scope.pageNumber = 1;

    $scope.getTripLanesData = function () {
        TripLaneServices.getTripLanes(function (success) {
            console.log(success)
            if (success.data.status) {
                $scope.tripLaneGridOptions.data = success.data.tripLanes;
                $scope.totalItems = success.data.count;
            } else {
                Notification.error({message: success.data.message});
            }
        }, function (err) {

        });
    };

    $scope.getTripLanesData();

    $scope.deleteTripLane = function (tripLaneId) {
        TripLaneServices.deleteTripLane(tripLaneId,function (success) {
            if (success){
                $scope.getTripLanesData();
                Notification.error({message: "Trip Lane Deleted"});
            }else {
                console.log("Error in deleting")
            }
        })
    }

    $scope.tripLaneGridOptions = {
        enableSorting: true,
        paginationPageSizes: [9, 20, 50],
        paginationPageSize: 9,
        columnDefs: [ {
            name: 'Name',
            field: 'name'
        }, {
            name: 'From',
            field: 'from'
        },{
            name: 'To',
            field: 'to'
        },{
            name: 'Estimated Distance',
            field: 'estimatedDistance'
        },{
            name: 'Created By',
            field: 'createdBy'
        },{
            name: 'Updated By',
            field: 'updatedBy'
        },{
            name: 'Action',
            cellTemplate: '<div class="text-center">' +
            '<a href="#" ng-click="grid.appScope.goToEditTripLanePage(row.entity._id)" class="glyphicon glyphicon-edit" style="padding-right: 10px;font-size: 20px;"></a><button ng-click="grid.appScope.deleteTripLane(row.entity._id)" class="btn btn-danger">Delete</button></div>'
        }],
        rowHeight: 40,
        data: [],
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
    };

}]);

app.controller('AddEditTripLaneCtrl', ['$scope','$state', 'Utils', 'TripLaneServices','$stateParams', 'Notification', function ($scope,$state, Utils, TripLaneServices, $stateParams, Notification) {
    console.log('-->', $stateParams);

    $scope.drivers = [];
    $scope.parties = [];

    $scope.tripLane = {
        name: '',
        from:'',
        to:'',
        estimatedDistance: '',
        success:''
    };
    $scope.cancel = function () {
        $state.go('tripLanes');
    };


    if ($stateParams.tripLaneId) {
        TripLaneServices.getTripLane($stateParams.tripLaneId, function (success) {
            console.log('acc--->', success.data.tripLane);
            if (success.data.status) {
                $scope.tripLane = success.data.tripLane;
            } else {
                Notification.error(success.data.message)
            }
        }, function (err) {
        })
    }

    $scope.addOrUpdateTripLane = function () {
        var params = $scope.tripLane;
        params.success = '';
        params.error = '';

        if (params._id) {
            //     delete params.userName;
            //     delete params.password;
            // }
            //
            // if (!params.name) {
            //     params.error = 'Invalid account name';
            // } else if (!params._id && !params.userName) {
            //     params.error = 'Invalid user name';
            // } else if (!params._id && !Utils.isValidPassword(params.password)) {
            //     params.error = 'Invalid password';
            // } else if (!params.address.trim()) {
            //     params.error = 'Invalid address'
            // } else if (!Utils.isValidPhoneNumber(params.contact)) {
            //     params.error = 'Invalid phone number';
            // } else if (params._id) {
            // If _id update the account
            TripLaneServices.updateTripLane(params, function (success) {
                if (success.data.status) {
                    params.success = success.data.message;
                    $state.go('tripLanes')
                    Notification.success({message: success.data.message});
                } else {
                    params.error = success.data.message;
                }
            }, function (err) {

            });
        } else {
            TripLaneServices.addTripLane(params, function (success) {
                if (success.data.status) {
                    params.success = success.data.message;
                    $state.go('tripLanes')
                    Notification.success({message: success.data.message});
                } else {
                    params.error = success.data.message;
                }
            }, function (err) {

            });
        }
    }
}]);
