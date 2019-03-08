@extends('layout.guest.root')

@section('title') Sign In @stop

@section('content')
<main id="main-container">

   <!-- Content -->
   <section class="content content-boxed">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 bg-white push-30">
            <div class="push-30-t push-30 padd-30-l padd-30-r">
                <div class="text-center">
                    <i class="si fa-2x si-login"></i>
                    <p class="text-muted push-15-t">SIGN IN TO YOUR ACCOUNT</p>
                </div>

                <form class="form-horizontal push-30-t push-10" id="signin" action="{{ route('signin') }}" method="post">
                    {{ csrf_field() }}
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="form-material">
                                <input class="form-control input-lg" type="text" name="email" value="{{ old('email') }}"> 
                                <label for="login-email">Email</label>
                                <span>
                                    @if($errors->has('email')) 
                                    <div class="text-danger text-right">{{ $errors->first('email') }}</div>
                                    @endif
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group push-10">
                        <div class="col-xs-12">
                            <div class="form-material">
                                <input class="form-control input-lg" type="password" name="password">
                                <label for="password">Password</label>
                                <span> 
                                    @if($errors->has('password')) 
                                    <div class="text-danger text-right">{{ $errors->first('password') }}
                                    </div>
                                    @endif
                                </span>

                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12  text-center">
                            <button class="btn btn-md btn-success btn-color" id="update" type="button">SIGN IN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>        <!-- END Section Content -->
</section>
<!-- END Content -->
</main>
@stop
@section('script')
<script type="text/javascript">
    $(document).ready(function () {
        $('#update').click(function () {
            $('#update').attr('disabled', true);
            $('#signin').submit();
            return true;
        });
    });
</script>
@stop