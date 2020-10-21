<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\ProductRepositoryInterface;

class ProductController extends Controller
{
    private $product;
    
    public function __construct(ProductRepositoryInterface $productRepo) {
        $this->product = $productRepo;
    }

    public function get(Request $request)
    {
        $all_product = $this->product->getProduct();
        return response()->json($all_product, 200);
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $create_product = $this->product->createProduct($data);
        return response()->json(
        [
            $create_product,
            'message' => "Create Product successful!"
        ], 
        200);
    }
}