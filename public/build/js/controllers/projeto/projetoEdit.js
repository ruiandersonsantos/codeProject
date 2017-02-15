angular.module('app.controllers')
    .controller('ProjetoEditController',['$scope','$location','$routeParams','Projeto','Client','appConfig','$cookies',
        function ($scope,$location,$routeParams ,Projeto,Client,appConfig,$cookies) {

            Projeto.get({id: $routeParams.id},function (data) {

                $scope.projeto = data;

                $scope.clienteSelecionado = data.cliente;

            });
           // $scope.clientes = Client.query();
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
                    $scope.projeto.cliente_id = $scope.projeto.cliente.id;

                     Projeto.update($scope.projeto.id,$scope.projeto,function () {
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

                $scope.projeto.cliente = item;

            }


        }]);
