<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
$versions = array('v1');

foreach ($versions as $key => $version) {
	foreach (File::allFiles(resource_path('routes/api/'.$version)) as $partial)
		{
			require_once $partial->getPathname();
		}
	}
