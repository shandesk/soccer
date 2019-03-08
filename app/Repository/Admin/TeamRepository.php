<?php

namespace App\Repository\Admin;

use App\Model\Team;
use Illuminate\Support\Facades\Auth;

class TeamRepository
{
	public static function paginateRecords($count)
	{
		return Team::where('admin_id',Auth::user()->id)->where('status',1)->paginate($count);
	}

	public static function addRecord($request)
	{
		$logo_path_name = 'team/default.png';
		if($request->logo){
			$logo_path_name = processFile($request->logo);
		}

		Team::create([
			'admin_id' => Auth::user()->id,
			'name' => strtolower($request->name),
			'logoUri' => $logo_path_name,
		]);
	}

	public static function findRecord($id)
	{
		return Team::where('admin_id',Auth::user()->id)->where('id',$id)->where('status',1)->first();
	}
}
