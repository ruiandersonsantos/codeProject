<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(CodeProject\Entities\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->safeEmail,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

$factory->define(CodeProject\Entities\Cliente::class, function (Faker\Generator $faker) {
    return [
        'nome' => $faker->name,
        'responsavel' => $faker->name,
        'email' => $faker->email,
        'telefone' => $faker->phoneNumber,
        'endereco' => $faker->address,
        'obs' => $faker->sentence
    ];
});

$factory->define(CodeProject\Entities\Projeto::class, function (Faker\Generator $faker) {
    return [
        'user_id' => rand(1,10),
        'cliente_id' => rand(1,10),
        'nome' => $faker->word,
        'descricao' => $faker->sentence,
        'status' => rand(1,3),
        'progresso' => rand(1,100),
        'inicio' => $faker->dateTime('now'),
        'termino' => $faker->date,

    ];
});

$factory->define(CodeProject\Entities\Tarefa::class, function (Faker\Generator $faker) {
    return [
        'projeto_id' => rand(1,10),
        'titulo' => $faker->word,
        'conteudo' => $faker->paragraph,


    ];
});