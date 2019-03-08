<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
// Request Import
use App\Http\Requests\Admin\TeamRequest;
// Repository Import
use App\Repository\Admin\TeamRepository;
use App\Repository\HelperRepository;

class TeamController extends Controller
{

    public function index()
    {
        $teams  = TeamRepository::paginateRecords(10);
        return view('views.admin.team.index',compact('teams'));
    }

    public function create()
    {
        return view('views.admin.team.create');
    }

    public function store(TeamRequest $request)
    {
        TeamRepository::addRecord($request);
        HelperRepository::getSuccessMessage('Team created Successfully!');

        return Redirect::to(route('adminTeam'));
    }

    public function edit($id)
    {
        $team = TeamRepository::findRecord($id);
        if(!$team){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminTeam'));
        }

        return view('views.admin.team.edit',compact('team'));
    }

    public function update(TeamRequest $request, $id)
    {
        $team = TeamRepository::findRecord($id);
        if(!$team){
            HelperRepository::getDangerMessage('Error Occured!. Please try later.');
            return Redirect::to(route('adminTeam'));
        }

        if(isset($request->logo) && $team->logoUri != 'team/default.jpg')
        {
           unlinkFile($request->logo);
       }

       if (isset($request->logo)) {
        $team->logoUri = processFile('team',$request->logo);
    }
    $team->name = $request->name;
    $team->save();

    HelperRepository::getSuccessMessage('Team updated Successfully!');

    return Redirect::to(route('adminTeamEdit',$id));
}

public function delete($id)
{
    $team = TeamRepository::findRecord($id);
    if(!$team){
        HelperRepository::getDangerMessage('Error Occured!. Please try later.');
        return Redirect::to(route('adminTeam'));
    }
    $team->status = 0;
    $team->save();
    $team->players()->update(['status' => 0]);
    HelperRepository::getSuccessMessage('Team & players deleted Successfully!');
    return Redirect::to(route('adminTeam'));
}
}