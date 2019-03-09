<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// Repository Import
use App\Repository\Api\TeamRepository;
use App\Http\Resources\TeamResource;

class TeamController extends Controller
{

    public function index()
    {
        $teams  = TeamRepository::getRecords();
        if (count($teams) == 0) {
            return response()->json(['message' => 'Not Found.'], 404);
        }
        return TeamResource::collection($teams);
    }
}