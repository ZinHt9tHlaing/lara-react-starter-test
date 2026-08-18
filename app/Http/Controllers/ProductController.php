<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::query()->latest()->get();

        return Inertia::render('Products/Index', compact('products'));
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

    public function destroy(Product $product)
    {
        try {
            $product->delete();
            return redirect()->route('products.index')
                ->with('success', 'Product deleted successfully.');
        } catch (\Exception $e) {
            return back()->withErrors($e->getMessage())
                ->with('error', $e->getMessage());
        }
    }

    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', compact('product'));
    }

    public function update(Request $request, Product $product)
    {
        try {
            $request->validate([
                "name" => "required|string|max:255",
                "price" => "required|numeric",
                "description" => "nullable|string",
            ]);

            $product->update([
                "name" => $request->input('name'),
                "price" => $request->input('price'),
                "description" => $request->input('description'),
            ]);

            return redirect()->route('products.index')
                ->with('success', 'Product updated successfully.');
        } catch (\Exception $e) {
            return back()->withErrors($e->getMessage())
                ->with('error', $e->getMessage());
        }
    }
}
