<?php

namespace App\Repository\Api;

use App\Model\Team;

class TeamRepository
{
	public static function getRecords()
	{
		return Team::where('status',1)->get();
	}
}
