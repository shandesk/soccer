<?php
Route::namespace('Api')->prefix('v1')->group(function () {
    Route::get('teams', 'TeamController@index')->name('apiTeams');
});