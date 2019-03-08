<?php

namespace App\Repository\Guest;

use App\Model\Team;

class TeamRepository
{
	public static function paginateRecords($count)
	{
		return Team::where('status',1)->paginate($count);
	}

	public static function latestRecords($limit)
	{
		return Team::where('status',1)->orderby('id')->limit($limit)->get();
	}

	public static function findRecord($id)
	{
		return Team::where('id',$id)->where('status',1)->first();
	}
}
