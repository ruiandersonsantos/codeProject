angular.module('app.controllers')
    .controller('ClientEditController',['$scope','$location','$routeParams','Client',
        function ($scope,$location, $routeParams ,Client) {

        $scope.cliente = Client.get({id: $routeParams.id});

        $scope.atualizar = function () {

            Client.update({id: $scope.cliente.id},$scope.cliente,function () {
               $location.path('/clientes');
               // console.log($scope.cliente);
            });


        };

    }]);

