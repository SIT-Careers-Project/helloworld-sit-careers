<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product')->insert([
            'product_name' => "Democracy",
            'product_price' => "10000000000000000000000000000000000000000000000",
        ]);
    }
}