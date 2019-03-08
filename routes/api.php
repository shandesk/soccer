<?php

use Illuminate\Http\Request;
use App\Model\Team;
use App\Model\Player;
use App\Http\Resources\TeamResource;
use App\Http\Resources\PlayerResource;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/teams/{limit}', function (Request $request,$limit) {
	$teams = Team::where('status',1)->limit($limit)->get();
	if (count($teams) == 0) {
		return response()->json(['message' => 'Not Found.'], 404);
	}
	return TeamResource::collection($teams);
});

Route::get('/teams', function (Request $request) {
	$teams = Team::where('status',1)->get();
	if (count($teams) == 0) {
		return response()->json(['message' => 'Not Found.'], 404);
	}
	return TeamResource::collection($teams);
});

Route::get('/team/{id}/players', function (Request $request,$id) {
	$players = Player::where('team_id',$id)->where('status',1)->get();
	if (count($players) == 0) {
		return response()->json(['message' => 'Not Found.'], 404);
	}
	return PlayerResource::collection($players)->additional(
		[
			'team' => [
				'id' => $players->first()->team->id,
				'name' => $players->first()->team->name,
				'logo' => $players->first()->team->logoUri,
			]
		]);
});
