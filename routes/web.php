<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{vue_capture?}', function () {
    return view('main');
})->where('vue_capture', '[\/\w\.-]*');

Route::post('super-secret-email-route', function (\App\Http\Requests\PortfolioInquiryFormRequest $request) {

    try {
        Mail::to('rbennett1106@gmail.com')->send(new \App\Mail\PortfolioInquiry($request->input()));
    } catch(Exception $e) {
        return response()->json([
            'message' => 'Error!',
        ], 500);
    }

    return response()->json([
        'message' => 'Success!',
    ], 200);
});