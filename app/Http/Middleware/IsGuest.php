<?php

namespace App\Http\Middleware;
// Support Import
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

use Closure;

class IsGuest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::check()) {
            return Redirect::to(route('adminTeam'));
        }

        return $next($request);
    }
}
