angular.module('app.controllers')
    .controller('TarefaEditController',['$scope','$location','$routeParams','Tarefa',
        function ($scope,$location, $routeParams ,Tarefa) {

        $scope.tarefa = Tarefa.get({
            id: $routeParams.id,
            idTarefa: $routeParams.idTarefa
        });

        console.log($routeParams);

        $scope.atualizar = function () {

            Tarefa.update({idTarefa: $scope.tarefa.id} ,$scope.tarefa, function () {
               $location.path('/projeto/'+$routeParams.id+'/tarefas');

            });


        };

    }]);

