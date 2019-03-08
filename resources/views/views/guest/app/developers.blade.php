@extends('layout.guest.root')

@section('title') Developers Api @stop
@section('robots') INDEX,ALLOW @stop
@section('content')
<main id="main-container">
	<section class="content content-boxed"> 
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<!-- Block Header -->
				<div class="block block-rounded push-5">
					<div class="block-header">
						<ul class="block-options push-5-t strictlook">
							<li>
								<a href="{{ route('home') }}">
									<i class="si fa-fw si-arrow-left"></i> Go back
								</a> 
							</li>
						</ul>
						<h3 class="block-title strictlook pull-left push-5-t">
							<i class="si si-lock"></i> Api Guide
						</h3>
					</div>
				</div>
				<!-- Block Header -->

				<!-- Block Content -->
				<div class="block block-rounded block-themed block-shadow animated fadeIn">
					<div class="block-content">
						<p class="lead">Get Limited Teams Through this api</p>
						<div class="nice-copy push">
							<p>
								<a href="{{ url('api/teams/{LIMIT}') }}">{{ url('api/teams/{LIMIT}') }}</a>
							</p>
						</div>
						<p class="lead">Get Complete Team Through this api</p>
						<div class="nice-copy push">
							<p>
								<a href="{{ url('api/teams') }}">{{ url('api/teams') }}</a>
							</p>
						</div>
						<p class="lead">Get Complete Team Players Through this api</p>
						<div class="nice-copy push">
							<p>
								<a href="{{ url('api/team/{TEAMID}/players') }}">{{ url('api/team/{TEAMID}/players') }}</a>
							</p>
						</div>
					</div>
				</div>
				<!-- Block Header End -->
			</div>    
		</div>
	</section>
</main>
@stop