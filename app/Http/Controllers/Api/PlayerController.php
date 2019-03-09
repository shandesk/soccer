<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// Repository Import
use App\Repository\Api\PlayerRepository;
use App\Http\Resources\PlayerResource;

class PlayerController extends Controller
{
    public function index($id)
    {
        $players  = PlayerRepository::getRecords($id);
        if (count($players) == 0) {
            return response()->json(['message' => 'Not Found.'], 404);
        }
        
        return PlayerResource::collection($players)->additional(
            [
                'team' => [
                    'id' => $players->first()->team->id,
                    'name' => $players->first()->team->name,
                    'logo' => $players->first()->team->logoUri,
                ]
            ]);
    }
}