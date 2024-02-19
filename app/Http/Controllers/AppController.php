<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function app()
    {
        $test_view = view('app');

        file_put_contents(storage_path('app.blade.html'), (string)$test_view);

        return view('app');
    }
}
