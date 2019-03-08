<?php

namespace App\Repository\Guest;

use App\Model\User;
use Illuminate\Support\Facades\Auth;
// Repository Import
use App\Repository\HelperRepository;

class UserRepository
{
	public static function getRecordByEmail($email)
	{
		return User::where('email',$email)->first();
	}

	public static function validateByEmail($email)
	{
		return User::where('email',$email)->first();
	}

	public static function validateByEmailAndPassword($request)
	{
		return Auth::attempt(['email' => $request['email'], 'password' => $request['password']],false);
	}
}
