angular.module('app.controllers')
    .controller('TarefaShowController',['$scope','Client',function ($scope, Client) {

        $scope.clients = Client.query();

    }]);

