<?php

namespace App\Http\Controllers;

use App\Palette;
use Illuminate\Http\Request;

class PaletteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Palette::paginate(24);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Palette  $palette
     * @return \Illuminate\Http\Response
     */
    public function show(Palette $getpalette)
    {
        //
        return $getpalette;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Palette  $palette
     * @return \Illuminate\Http\Response
     */
    public function edit(Palette $palette)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Palette  $palette
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Palette $palette)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Palette  $palette
     * @return \Illuminate\Http\Response
     */
    public function destroy(Palette $palette)
    {
        //
    }
}