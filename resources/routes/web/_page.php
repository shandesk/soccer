<?php
Route::namespace('Guest')->group(function () {
	Route::get('/', 'PageController@index')->name('home');
	Route::get('/teams', 'PageController@team')->name('team');
	Route::get('/teams/{id}', 'PageController@player')->name('players');
	Route::get('/developers', 'PageController@developers')->name('developers');
});