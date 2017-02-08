angular.module('app.services')
.service('Tarefa',['$resource','appConfig',function ($resource, appConfig) {
    return $resource(appConfig.baseUrl + '/projeto/:id/tarefa/:idTarefa',{
        id: '@id',
        idTarefa: '@idTarefa'
    },{
        update: {
            method: 'PUT'
        },
        get:{
            method:'GET',
            transformResponse: function (data,headers) {

                // Capturando cabeçalho da requisição para saber o content-type
                var headerGetter = headers();

                if(headerGetter['content-type'] == 'application/json' || headerGetter['content-type'] == 'text/json'){
                    // fazendo parse Jason
                    var dataJson = JSON.parse(data);

                    if(dataJson.hasOwnProperty('data')){
                        dataJson = dataJson.data;
                    }
                    // retornando Json tratado
                    return dataJson[0];
                }
                // retornando requisição quando não for Json
                return data;
            }


        }
    });
}]);


/*Route::group(['prefix'=>'projeto'],function (){

    Route::get('{id}/tarefa','TarefasController@index');
    Route::post('{id}/tarefa','TarefasController@store');
    Route::get('{id}/tarefa/{tarefaId}','TarefasController@show');
    Route::put('{id}/tarefa/{tarefaId}','TarefasController@update');
    Route::delete('{id}/tarefa/{tarefaId}','TarefasController@destroy');
});*/