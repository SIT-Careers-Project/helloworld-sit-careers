<?php
namespace App\Repositories;

interface ProductRepositoryInterface
{
    public function getProduct();
    public function createProduct($create_product);
}