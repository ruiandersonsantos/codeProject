angular.module('app.controllers')
    .controller('TarefaRemoveController',['$scope','$location','$routeParams','Tarefa',
        function ($scope,$location, $routeParams ,Tarefa) {

            $scope.tarefa = Tarefa.get({
                id: $routeParams.id,
                idTarefa: $routeParams.idTarefa
            });


        $scope.remover = function () {
            $scope.tarefa.$delete({id: $scope.tarefa.projeto_id, idTarefa: $scope.tarefa.id}).then(function () {
               $location.path('/projeto/'+$routeParams.id+'/tarefas');
            });

        };

    }]);

