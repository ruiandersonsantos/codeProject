angular.module('app.controllers')
    .controller('ClientNewController',['$scope','$location','Client',function ($scope,$location ,Client) {

        $scope.cliente = new Client();

        $scope.save = function () {

            if($scope.form.$valid){

                if($scope.form.$valid){
                    $scope.cliente.$save().then(function () {

                        $location.path('/clientes');

                    });
                }



            }


        };

    }]);

