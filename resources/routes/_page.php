<?php
Route::namespace('Guest')->group(function () {
	Route::get('/', 'PageController@index')->name('home');
	Route::get('/teams', 'PageController@team')->name('team');
	Route::get('/team/{id}', 'PageController@player')->name('players');
	Route::get('/developers', 'PageController@developers')->name('developers');
});