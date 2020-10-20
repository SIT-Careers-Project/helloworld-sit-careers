<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Riak\Connection;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            "App\Repositories\StudentRepositoryInterface",
            "App\Repositories\StudentRepository",
        );
        
        $this->app->bind(
            "App\Repositories\ProductRepositoryInterface",
            "App\Repositories\ProductRepository",
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
