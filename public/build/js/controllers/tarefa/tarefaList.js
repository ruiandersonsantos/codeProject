angular.module('app.controllers')
    .controller('TarefaListController',[
        '$scope', '$routeParams','Tarefa',function ($scope,$routeParams, Tarefa) {

        $scope.tarefas = Tarefa.query({id: $routeParams.id});

        $scope.projeto = "Nome do projeto";

    }]);
