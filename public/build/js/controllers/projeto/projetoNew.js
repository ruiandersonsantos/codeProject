angular.module('app.controllers')
    .controller('ProjetoNewController',['$scope','$location','Projeto','Client','appConfig','$cookies',
        function ($scope,$location ,Projeto,Client,appConfig,$cookies) {

        $scope.projeto = new Projeto();
        $scope.status = appConfig.projeto.status;

        $scope.dt_inicio = false;
        
        $scope.openInicio = function ($event) {
            $scope.dt_inicio = true;
        };

        $scope.dt_termino = false;

        $scope.openTermino = function ($event) {
            $scope.dt_termino = true;
        };


        $scope.save = function () {

               if($scope.form.$valid){
                   $scope.projeto.user_id = $cookies.getObject('user').id;

                    $scope.projeto.$save().then(function () {

                        $location.path('/projetos');

                    });
                }


        };

            $scope.formatName = function(model){

                if(model){
                    return model.nome;
                }

                return '';
            };

            $scope.getClientes = function (nome) {
                return Client.query({
                    search:nome,
                    searchFields:'nome:like'
                }).$promise;
            }


            $scope.selectCliente = function (item) {

                $scope.projeto.cliente_id = item.id;

            }

    }]);

