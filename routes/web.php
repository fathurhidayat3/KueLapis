<?php

use App\Color;
use App\Palette;
use App\Gradient;

Route::resource('/color', 'ColorController');
Route::get('/getcolors', 'ColorController@getcolors');
Route::get('/getpalettes', 'PaletteController@getpalettes');
Route::get('/getgradients', 'GradientController@getgradients');

Route::get('/getall', function() {
    $color = Color::orderBy('id', 'ASC')->take(12)->get();
    $palette = Palette::orderBy('id', 'ASC')->take(12)->get();
    $gradient = Gradient::orderBy('id', 'ASC')->take(12)->get();

    return compact('color', 'palette', 'gradient');
});

Route::get('/{uri}', function () {
    return view('welcome');
})->where('uri', '.*');


