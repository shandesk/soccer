<?php
Route::namespace('Guest')->middleware('isGuest')->group(function () {

    Route::get('signin', 'SigninController@index')->name('signin');
    Route::post('signin', 'SigninController@check');
    
});