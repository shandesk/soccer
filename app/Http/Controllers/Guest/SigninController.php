<?php

namespace App\Http\Controllers\Guest;

// Support Import
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
// Controller Import
use App\Http\Controllers\Controller;
// Repository Import
use App\Repository\Guest\UserRepository;
use App\Repository\HelperRepository;
// Request Import
use App\Http\Requests\Guest\SigninRequest;


class SigninController extends Controller
{
    /*
    * Display a listing of the resource.
    */
    public function index(Request $request)
    {
        return view('views.guest.auth.signin');
    }

    /*
    * Store a newly created resource in storage.
    */
    public function check(SigninRequest $request)
    {
        if (!UserRepository::validateByEmailAndPassword($request)){
            HelperRepository::getDangerMessage('The email or password you have entered is invalid.');
            return Redirect::back()->withInput();
        }

        return Redirect::intended(route('adminTeam'));
    }
}
