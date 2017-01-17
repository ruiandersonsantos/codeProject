<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(UserTableSeeder::class);
        $this->call(ClienteTableSeeder::class);
        $this->call(ProjetoTableSeeder::class);
        $this->call(TarefaTableSeeder::class);

        Model::reguard();
    }
}
