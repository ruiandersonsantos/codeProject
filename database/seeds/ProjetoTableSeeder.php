<?php

use Illuminate\Database\Seeder;

class ProjetoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\CodeProject\Entities\Projeto::class,10)->create();
    }
}
