angular.module('app.controllers')
    .controller('TarefaNewController',['$scope','$location','Tarefa','$routeParams',
        function ($scope,$location ,Tarefa,$routeParams) {

        $scope.tarefa = new Tarefa();

        $scope.tarefa.projeto_id = $routeParams.id;

        $scope.save = function () {

            if($scope.form.$valid){

                if($scope.form.$valid){
                    $scope.tarefa.$save({id: $routeParams.id}).then(function () {

                        $location.path('/projeto/'+$routeParams.id+'/tarefas');

                    });
                }



            }


        };

    }]);

