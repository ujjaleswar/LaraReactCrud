<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    // GET ALL
    public function index()
    {
        return Blog::all();
    }

    // CREATE
    public function store(Request $request)
    {
        $blog = new Blog();
        $blog->name = $request->name;
        $blog->description = $request->description;
        $blog->save();

        return response()->json(['message' => 'Blog created successfully'], 201);
    }

    // GET SINGLE
    public function show($id)
    {
        return Blog::find($id);
    }

    // UPDATE
    public function update(Request $request, $id)
    {
        $blog = Blog::find($id);

        $blog->name = $request->name;
        $blog->description = $request->description;
        $blog->save();

        return response()->json(['message' => 'Blog updated successfully']);
    }

    // DELETE
    public function destroy($id)
    {
        Blog::destroy($id);

        return response()->json(['message' => 'Blog deleted successfully']);
    }
}
