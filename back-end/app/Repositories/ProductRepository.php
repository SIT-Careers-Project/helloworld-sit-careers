<?php
namespace App\Repositories;
use App\Models\Product;
class ProductRepository implements ProductRepositoryInterface
{
    public function getProduct(){
        return Product::all();
    }

    public function createProduct($create_product){
        $product = Product::insertGetId([
            'product_name' => $create_product['product_name'], 
            'product_price' => $create_product['product_price']
        ]);
        return $product;
    }
}