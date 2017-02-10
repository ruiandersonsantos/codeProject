angular.module('app.services')
.service('Tarefa',['$resource','appConfig',function ($resource, appConfig) {
    return $resource(appConfig.baseUrl + '/projeto/:id/tarefa/:idTarefa',{
        id: '@id',
        idTarefa: '@idTarefa'
    },{
        update: {
            method: 'PUT'
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