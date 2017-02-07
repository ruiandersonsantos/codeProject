angular.module('app.controllers')
    .controller('TarefaRemoveController',['$scope','$location','$routeParams','Client',
        function ($scope,$location, $routeParams ,Client) {

        $scope.cliente = Client.get({id: $routeParams.id});

        $scope.remover = function () {
            $scope.cliente.$delete().then(function () {
                $location.path('/clientes');
            });

        };

    }]);

