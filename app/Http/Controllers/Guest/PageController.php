<?php

namespace App\Http\Controllers\Guest;

// Support Import
use Illuminate\Http\Request;
// Controllers Import
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
// Repositories Import
use App\Repository\Guest\TeamRepository;

class PageController extends Controller
{
	public function index()
	{ 
		$request = Request::create(route('apiTeams'), 'GET');
		$teams = json_decode(Route::dispatch($request)->getContent());
		return view('views.guest.app.index',compact('teams'));
	}

	public function team()
	{ 
		$request = Request::create(route('apiTeams'), 'GET');
		$teams = json_decode(Route::dispatch($request)->getContent());
		return view('views.guest.app.team',compact('teams'));
	}

	public function player($team)
	{ 
		$request = Request::create(route('apiShowPlayers',['id'=>$team]), 'GET');
		$players = json_decode(Route::dispatch($request)->getContent());
		if (isset($players->message)) {
			abort(404);
		}
		return view('views.guest.app.player',compact('players'));
	}

	public function developers()
	{ 
		return view('views.guest.app.developers');
	}
}