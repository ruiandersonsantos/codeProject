angular.module('app.controllers')
    .controller('ProjetoNewController',['$scope','$location','Projeto','Client','appConfig','$cookies',
        function ($scope,$location ,Projeto,Client,appConfig,$cookies) {

        $scope.projeto = new Projeto();
        $scope.clientes = Client.query();
        $scope.status = appConfig.projeto.status;


        $scope.save = function () {

               if($scope.form.$valid){
                   $scope.projeto.user_id = $cookies.getObject('user').id;
                    $scope.projeto.$save().then(function () {

                        $location.path('/projetos');

                    });
                }


        };

    }]);

