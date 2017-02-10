angular.module('app.controllers')
    .controller('ProjetoListController',[
        '$scope', '$routeParams','Projeto',function ($scope,$routeParams, Projeto) {

        $scope.projetos = Projeto.query();

    }]);
