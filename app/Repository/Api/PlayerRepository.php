<?php

namespace App\Repository\Api;

use App\Model\Player;

class PlayerRepository
{
	public static function getRecords($id)
	{
		return Player::where('team_id',$id)->where('status',1)->get();
	}
}
