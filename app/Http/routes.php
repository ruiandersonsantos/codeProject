<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/



Route::get('/', function () {
    return view('app');
});

Route::post('oauth/access_token',function (){
    return Response::json(Authorizer::issueAccessToken());
});


Route::group(['middleware'=>'oauth'],function (){

    Route::resource('cliente','ClienteController',['except'=>['create','edit']]);

    Route::group(['middleware'=>'CheckDonoProjeto'], function (){
        Route::resource('projeto','ProjetosController',['except'=>['create','edit']]);
    });

    Route::group(['prefix'=>'projeto'],function (){

        Route::get('{id}/tarefa','TarefasController@index');
        Route::post('{id}/tarefa','TarefasController@store');
        Route::get('{id}/tarefa/{tarefaId}','TarefasController@show');
        Route::put('{id}/tarefa/{tarefaId}','TarefasController@update');
        Route::delete('{id}/tarefa/{tarefaId}','TarefasController@destroy');
    });


});

