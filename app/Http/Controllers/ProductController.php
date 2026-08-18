<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Products/Index',);
    }

    public function create()
    {
        return Inertia::render('Products/Create',);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                "name" => "required|string|max:255",
                "price" => "required|numeric",
                "description" => "nullable|string",
            ]);

            Product::create($request->all());

            return redirect()->route('products.index')
                ->with('success', 'Product created successfully.');
        } catch (\Exception $e) {
            return back()->withErrors($e->getMessage())
                ->with('error', $e->getMessage());
        }
    }
}