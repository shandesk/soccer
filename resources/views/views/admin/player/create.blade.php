@extends('layout.admin.root')

@section('title') Add Player @stop

@section('content')
<div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 bg-white push-5 push-100-t">
        <div class="block block-rounded push-5">
          <div class="block-header padd-5-r">
            <ul class="block-options">
              <li>
                <a class="btn btn-noborder btn-rounded btn-md btn-success text-white-imp" href="{{ route('adminPlayer',['team'=>$team->id]) }}">
                    <i class="si si-arrow-left"></i> Back
                </a>
            </li>
        </ul>
        <h3 class="block-title strictlook pull-left push-5-t">Add Player</h3>
    </div>
</div>
</div>

<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 bg-white push-30">
    <div class="block-content">
        <form class="form-horizontal" action="{{ route('adminPlayerCreate',['team' => $team->id]) }}" id="addForm" method="post" enctype="multipart/form-data">
            {{ csrf_field() }}
            <div class="form-group">
                <div class="col-xs-12 col-sm-6 col-md-8 col-lg-9 push-10 push-10-t">
                    <input type="file" name="image">
                    @if($errors->has('image')) 
                    <div class="text-danger text-right">{{ $errors->first('image') }}</div>
                    @endif
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12">
                    <input class="form-control input-lg" type="text" name="first" value="{{ old('first') }}" placeholder="First Name"> 
                    <span>
                        @if($errors->has('first')) 
                        <div class="text-danger text-right">{{ $errors->first('first') }}</div>
                        @endif
                    </span>
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12">
                    <input class="form-control input-lg" type="text" name="last" value="{{ old('last') }}" placeholder="Last Name"> 
                    <span>
                        @if($errors->has('last')) 
                        <div class="text-danger text-right">{{ $errors->first('last') }}</div>
                        @endif
                    </span>
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12 text-center">
                    <button class="btn btn-md btn-success btn-color" id="add" type="button">
                        <i class="si si-plus push-5-r"></i> Add Player
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
        $('#add').click(function () {
            $('#add').attr('disabled', true);
            $('#addForm').submit();
            return true;
        });
    });
</script>
@stop