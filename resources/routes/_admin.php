<?php
Route::namespace('Admin')->prefix('admin')->middleware('isUser')->group(function () {

    Route::get('teams', 'TeamController@index')->name('adminTeam');
    Route::get('team/create', 'TeamController@create')->name('adminTeamCreate');
    Route::post('team/create', 'TeamController@store');
    Route::get('team/edit/{id}', 'TeamController@edit')->name('adminTeamEdit');
    Route::post('team/edit/{id}', 'TeamController@update');
    Route::get('team/delete/{id}', 'TeamController@delete')->name('adminTeamDelete');
    
    Route::get('players/{team}', 'PlayerController@index')->name('adminPlayer');
    Route::get('player/{team}/create', 'PlayerController@create')->name('adminPlayerCreate');
    Route::post('player/{team}/create', 'PlayerController@store');
    Route::get('player/{team}/edit/{id}', 'PlayerController@edit')->name('adminPlayerEdit');
    Route::post('player/{team}/edit/{id}', 'PlayerController@update');
    Route::get('player/{team}/delete/{id}', 'PlayerController@delete')->name('adminPlayerDelete');
    
    Route::get('signout', 'SignoutController@index')->name('adminSignout');
});