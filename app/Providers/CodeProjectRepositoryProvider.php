<?php

namespace CodeProject\Providers;

use Illuminate\Support\ServiceProvider;

class CodeProjectRepositoryProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            \CodeProject\Repositories\ClienteRepository::class,
            \CodeProject\Repositories\ClienteRepositoryEloquent::class
        );

        $this->app->bind(
            \CodeProject\Repositories\ProjetoRepository::class,
            \CodeProject\Repositories\ProjetoRepositoryEloquent::class
        );

        $this->app->bind(
            \CodeProject\Repositories\TarefaRepository::class,
            \CodeProject\Repositories\TarefaRepositoryEloquent::class
        );
    }
}
