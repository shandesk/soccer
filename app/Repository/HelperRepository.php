<?php

namespace App\Repository;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Model\Currency;
use App\Model\Country;
use App\Model\Role;

class HelperRepository
{
	public static function getDeniedMessage()
	{
		session()->flash('action','common');
		session()->flash('type','danger');
		session()->flash('message','You dont\'t have permission to access this page. Please contact admin.');
		return redirect(route('adminDashboard'));
	}

	public static function getSuccessMessage($msg)
	{
		session()->flash('action','common');
		session()->flash('type','success');
		session()->flash('message',$msg);
	}

	public static function getDangerMessage($msg)
	{
		session()->flash('action','common');
		session()->flash('type','danger');
		session()->flash('message',$msg);
	}

	public static function getWarningMessage($msg)
	{
		session()->flash('action','common');
		session()->flash('type','warning');
		session()->flash('message',$msg);
	}
}
