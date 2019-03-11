<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
// Request Import
use App\Http\Requests\Admin\PlayerRequest;
// Repository Import
use App\Repository\Admin\TeamRepository;
use App\Repository\Admin\PlayerRepository;
use App\Repository\HelperRepository;

class PlayerController extends Controller
{

    public function index($team)
    {
        $team = TeamRepository::findRecord($team);
        if(!$team){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminTeam'));
        }

        $players = $team->players()->paginate(10);
        return view('views.admin.player.index',compact('team','players'));
    }

    public function create($team)
    {
        $team = TeamRepository::findRecord($team);
        if(!$team){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminTeam'));
        }
        return view('views.admin.player.create',compact('team'));
    }

    public function store(PlayerRequest $request,$team)
    {
        $team = TeamRepository::findRecord($team);
        if(!$team){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminTeam'));
        }

        PlayerRepository::addRecord($request,$team->id);
        HelperRepository::getSuccessMessage('Player created Successfully!');

        return Redirect::to(route('adminPlayer',['team'=>$team->id]));
    }

    public function edit($team,$id)
    {
        $team = TeamRepository::findRecord($team);
        if(!$team){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminTeam'));
        }
        $player = $team->player($id);
        if(!$player){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminPlayer',['team' => $team->id]));
        }

        return view('views.admin.player.edit',compact('team','player'));
    }

    public function update(PlayerRequest $request,$team,$id)
    {
        $team = TeamRepository::findRecord($team);
        if(!$team){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminTeam'));
        }

        $player = $team->player($id);
        if(!$player){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminPlayer',['team' => $team->id]));
        }

        if(isset($request->image) && $player->imageUri != 'player/default.jpg')
        {
            unlinkFile($request->image);
        }

        if (isset($request->image)) 
        {
            $player->imageUri = processFile('player',$request->image);
        }
        $player->first_name = $request->first;
        $player->last_name = $request->last;
        $player->save();

        HelperRepository::getSuccessMessage('Player updated Successfully!');

        return Redirect::to(route('adminPlayerEdit',['team'=>$team->id,'id'=>$id]));
    }

    public function delete($team,$id)
    {
        $team = TeamRepository::findRecord($team);
        if(!$team){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminTeam'));
        }

        $player = $team->player($id);
        if(!$player){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminPlayer',['team'=>$team->id]));
        }
        $player->status = 0;
        $player->save();

        HelperRepository::getSuccessMessage('Player deleted Successfully!');
        return Redirect::to(route('adminPlayer',['team'=>$team->id]));
    }
}