<?php

namespace App\Repository\Admin;

use App\Model\Player;

class PlayerRepository
{
	public static function paginateRecords($count,$team)
	{
		return Player::where('team_id',$team)->where('status',1)->paginate($count);
	}

	public static function addRecord($request,$team)
	{
		$image_path_name = 'player/default.png';
		if($request->image){
			$image_path_name = processFile($request->image);
		}

		Player::create([
			'team_id' => $team,
			'first_name' => strtolower($request->first),
			'last_name' => strtolower($request->last),
			'imageUri' => $image_path_name,
		]);
	}

	public static function findRecord($team,$id)
	{
		return Player::where('team_id',$team)->where('id',$id)->where('status',1)->first();
	}
}
