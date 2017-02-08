var app = angular.module('app',['ngRoute','angular-oauth2','app.controllers', 'app.services']);

angular.module('app.controllers',['ngMessages','angular-oauth2']);
angular.module('app.services',['ngResource']);

app.provider('appConfig', function () {

    var config = {
        baseUrl: 'http://localhost:8000'
    };

    return {
        config: config,
        $get: function () {
            return config;
        }
    }

});

app.config(['$routeProvider','$httpProvider','OAuthProvider','OAuthTokenProvider','appConfigProvider',
    function($routeProvider,$httpProvider, OAuthProvider, OAuthTokenProvider, appConfigProvider){

    /* Esse provider intercepta todas as requisições e faz o tratamento para quando
    * o JSON vier como string devido a modificação no present do Laravel*/
    $httpProvider.defaults.transformResponse = function (data,headers) {

            // Capturando cabeçalho da requisição para saber o content-type
            var headerGetter = headers();

            if(headerGetter['content-type'] == 'application/json' || headerGetter['content-type'] == 'text/json'){
                // fazendo parse Jason
                var dataJson = JSON.parse(data);

                if(dataJson.hasOwnProperty('data')){
                    dataJson = dataJson.data;
                }
                // retornando Json tratado
                return dataJson;
            }
            // retornando requisição quando não for Json
            return data;
        };

    $routeProvider
        .when('/login',{
            templateUrl: 'build/views/login.html',
            controller: 'LoginController'
        })
        .when('/home',{
            templateUrl: 'build/views/home.html',
            controller: 'HomeController'
        })
        .when('/clientes',{
            templateUrl: 'build/views/client/list.html',
            controller: 'ClientListController'
        })
        .when('/clientes/novo',{
            templateUrl: 'build/views/client/new.html',
            controller: 'ClientNewController'
        })
        .when('/clientes/:id/editar',{
            templateUrl: 'build/views/client/edit.html',
            controller: 'ClientEditController'
        })
        .when('/clientes/:id/remove',{
            templateUrl: 'build/views/client/remove.html',
            controller: 'ClientRemoveController'
        })

        .when('/projeto/:id/tarefas',{
            templateUrl: 'build/views/tarefa/list.html',
            controller: 'TarefaListController'
        })
        .when('/projeto/:id/tarefa/:idTarefa/show',{
            templateUrl: 'build/views/tarefa/show.html',
            controller: 'TarefaShowController'
        })
        .when('/projeto/:id/tarefa/novo',{
            templateUrl: 'build/views/tarefa/new.html',
            controller: 'TarefaNewController'
        })
        .when('/projeto/:id/tarefa/:idTarefa/editar',{
            templateUrl: 'build/views/tarefa/edit.html',
            controller: 'TarefaEditController'
        })
        .when('/projeto/:id/tarefa/:idTarefa/remove',{
            templateUrl: 'build/views/tarefa/remove.html',
            controller: 'TarefaRemoveController'
        });


    OAuthProvider.configure({
        baseUrl: appConfigProvider.config.baseUrl,
        clientId: 'appid1',
        clientSecret: 'secret',
        grantPath: 'oauth/access_token'

    });

    OAuthTokenProvider.configure({
        name: 'token',
        options:{
            secure: false
        }
    });

}]);

app.run(['$rootScope', '$window', 'OAuth', function($rootScope, $window, OAuth) {
    $rootScope.$on('oauth:error', function(event, rejection) {
        // Ignore `invalid_grant` error - should be catched on `LoginController`.
        if ('invalid_grant' === rejection.data.error) {
            return;
        }

        // Refresh token when a `invalid_token` error occurs.
        if ('invalid_token' === rejection.data.error) {
            return OAuth.getRefreshToken();
        }

        // Redirect to `/login` with the `error_reason`.
        return $window.location.href = '/login?error_reason=' + rejection.data.error;
    });
}]);