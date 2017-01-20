<?php

use Illuminate\Database\Seeder;

class TarefaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\CodeProject\Entities\Tarefa::class,10)->create();
    }
}
