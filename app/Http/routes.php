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
    return view('welcome');
});

Route::post('oauth/access_token',function (){
    return Response::json(Authorizer::issueAccessToken());
});

Route::get('/cliente','ClienteController@index');
Route::post('/cliente','ClienteController@store');
Route::get('/cliente/{id}','ClienteController@show');
Route::delete('/cliente/{id}','ClienteController@destroy');
Route::put('/cliente/{id}','ClienteController@update');

Route::get('/projeto/{id}/tarefa','TarefasController@index');
Route::post('/projeto/{id}/tarefa','TarefasController@store');
Route::get('/projeto/{id}/tarefa/{tarefaId}','TarefasController@show');
Route::put('/projeto/{id}/tarefa/{tarefaId}','TarefasController@update');
Route::delete('/projeto/{id}/tarefa/{tarefaId}','TarefasController@destroy');

Route::get('/projeto','ProjetosController@index');
Route::post('/projeto','ProjetosController@store');
Route::get('/projeto/{id}','ProjetosController@show');
Route::delete('/projeto/{id}','ProjetosController@destroy');
Route::put('/projeto/{id}','ProjetosController@update');