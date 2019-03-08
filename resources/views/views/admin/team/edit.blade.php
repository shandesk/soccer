@extends('layout.admin.root')

@section('title') Update Team @stop

@section('content')
<div class="row">
  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 bg-white push-5 push-100-t">
    <div class="block block-rounded push-5">
      <div class="block-header padd-5-r">
        <ul class="block-options">
          <li>
            <a class="btn btn-noborder btn-rounded btn-md btn-success text-white-imp" href="{{ route('adminTeam') }}">
              <i class="si si-arrow-left"></i> Back
            </a>
          </li>
        </ul>
        <h3 class="block-title strictlook pull-left push-5-t">Update Team</h3>
      </div>
    </div>
  </div>

  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 bg-white push-30">
    <div class="block-content">
      <div class="text-center push-10-t push-30">
        <img class="img-avatar img-avatar96 img-thumbnail" src="{{ path($team->logoUri) }}">
      </div>
      <form class="form-horizontal" action="{{ route('adminTeamEdit',['id'=>$team->id]) }}" id="editForm" method="post" enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class="form-group">
          <div class="col-xs-12 col-sm-6 col-md-8 col-lg-9 push-10 push-10-t">
            <input type="file" name="logo">
            @if($errors->has('logo')) 
            <div class="text-danger text-right">{{ $errors->first('logo') }}</div>
            @endif
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12">
            <input class="form-control input-lg" type="text" name="name" value="{{ $team->name }}" placeholder="Team Name"> 
            <span>
              @if($errors->has('name')) 
              <div class="text-danger text-right">{{ $errors->first('name') }}</div>
              @endif
            </span>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12 text-center">
            <button class="btn btn-md btn-success btn-color" id="edit" type="button">
              <i class="si si-plus push-5-r"></i> Update Team
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</div>
@stop
@section('script')
<script type="text/javascript">
    $(document).ready(function () {
        $('#edit').click(function () {
            $('#edit').attr('disabled', true);
            $('#editForm').submit();
            return true;
        });
    });
</script>
@stop