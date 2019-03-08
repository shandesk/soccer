<?php

namespace App\Http\Middleware;
// Support Import
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

use Closure;

class IsUser
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
        if (!Auth::check()) {
            return Redirect::to(route('signin'));
        }
        
        return $next($request);
    }
}
