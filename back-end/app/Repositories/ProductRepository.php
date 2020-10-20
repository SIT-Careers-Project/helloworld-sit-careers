<?php
namespace App\Repositories;
use App\Models\Product;
class ProductRepository implements ProductRepositoryInterface
{
    public function getProduct(){
        return Product::all();
    }
}