@extends('layout.admin.root')

@section('title') {{ $team->name }} Players @stop

@section('content')
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="block block-rounded push-5">
      <div class="block-header padd-5-r">
        <ul class="block-options">
         <li>
           <a class="btn btn-noborder btn-rounded btn-md btn-success text-white-imp" href="{{ route('adminTeam') }}">
            <i class="si si-arrow-left"></i> Back
          </a>
        </li>
        <li>
         <a class="btn btn-noborder btn-rounded btn-md btn-success text-white-imp" href="{{ route('adminPlayerCreate',['team'=>$team->id]) }}">
          <i class="si si-plus"></i> Add
        </a>
      </li>
    </ul>
    <h3 class="block-title strictlook pull-left push-5-t">Players</h3>
  </div>
</div>
<div class="block block-rounded block-themed block-shadow">
  <div class="block-content">
    @if(count($players) > 0 )
    <table class="table table-hover table-vcenter">
      <thead>
        <tr>
          <th style="width: 10%;" class="text-center">Logo</th>
          <th style="width: 20%;">First Name</th>
          <th style="width: 20%;">Last Name</th>
          <th class="text-center" style="width: 20%;">Team</th>
          <th class="text-center" style="width: 20%;">Actions</th>
        </tr>
      </thead>
      <tbody>
        @foreach($players as $index => $player)
        <tr>
          <td class="text-center">
            <img class="img-avatar img-avatar48" src="{{ path($player->imageUri) }}">
          </td>
          <td>{{ ucfirst($player->first_name) }}</td>
          <td>{{ ucfirst($player->last_name) }}</td>
          <td class="text-center">{{ $player->team->name }}</td>
          <td class="text-center">
            <a class="btn btn-noborder btn-sm btn-success" href="{{ route('adminPlayerEdit',['team'=>$team->id,'id'=>$player->id]) }}">
              Edit
            </a>
            <a class="btn btn-noborder btn-sm btn-success" href="{{ route('adminPlayerDelete',['team'=>$team->id,'id'=>$player->id]) }}">
              Delete
            </a>
          </td>
        </tr>
        @endforeach
        @if($players->lastPage() > 1 )
        <tr>
          <td colspan="5" class="text-center">
            <nav>
              {{ $players->links() }}
            </nav>
          </td>
        </tr>
        @endif
      </tbody>
    </table>
    @else
    @include('partials.empty.index',['icon' => 'fa fa-group','title' => 'Players'])
    @endif
  </div>
</div>
</div>
</div>
@stop