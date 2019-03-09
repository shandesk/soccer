<?php
Route::namespace('api')->prefix('v1')->group(function () {
    Route::get('teams/{id}', 'PlayerController@index')->name('apiShowPlayers');
});