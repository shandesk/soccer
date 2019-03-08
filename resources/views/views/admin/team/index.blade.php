@extends('layout.admin.root')

@section('title') Teams @stop

@section('content')
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="block block-rounded push-5">
      <div class="block-header padd-5-r">
        <ul class="block-options">
        <li>
         <a class="btn btn-noborder btn-rounded btn-md btn-success text-white-imp" href="{{ route('adminTeamCreate') }}">
          <i class="si si-plus"></i> Create
        </a>
      </li>
    </ul>
    <h3 class="block-title strictlook pull-left push-5-t">Teams</h3>
  </div>
</div>
<div class="block block-rounded block-themed block-shadow">
  <div class="block-content">
    @if(count($teams) > 0 )
    <table class="table table-hover table-vcenter">
      <thead>
        <tr>
          <th style="width: 10%;" class="text-center">Logo</th>
          <th style="width: 60%;">Name</th>
          <th class="text-center" style="width: 10%;">Players</th>
          <th class="text-center" style="width: 20%;">Actions</th>
        </tr>
      </thead>
      <tbody>
        @foreach($teams as $index => $team)
        <tr>
          <td class="text-center">
            <img class="img-avatar img-avatar48" src="{{ path($team->logoUri) }}">
          </td>
          <td>{{ ucfirst($team->name) }}</td>
          <td class="text-center">{{ $team->players->count() }}</td>
          <td class="text-center">
            <a class="btn btn-noborder btn-sm btn-success" href="{{ route('adminTeamEdit',$team->id) }}">
              Edit
            </a>
            <a class="btn btn-noborder btn-sm btn-success" href="{{ route('adminTeamDelete',$team->id) }}">
              Delete
            </a>
            <a class="btn btn-noborder btn-sm btn-success" href="{{ route('adminPlayer',$team->id) }}">
              Players
            </a>
          </td>
        </tr>
        @endforeach
        @if($teams->lastPage() > 1 )
        <tr>
          <td colspan="4" class="text-center">
            <nav>
              {{ $teams->links() }}
            </nav>
          </td>
        </tr>
        @endif
      </tbody>
    </table>
    @else
    @include('partials.empty.index',['icon' => 'fa fa-group','title' => 'Teams'])
    @endif
  </div>
</div>
</div>
</div>
@stop