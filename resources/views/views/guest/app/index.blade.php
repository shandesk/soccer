@extends('layout.guest.root')

@section('title') A Platform for Teams & Players @stop
@section('robots') INDEX,ALLOW @stop
@section('content')
<main id="main-container">
	<div class="bg-white">
		<section class="content content-full content-boxed overflow-hidden">
			<div class="push-100-t push-100 text-center">
				<h1 class="h1 font-w700 text-gray-darker push-10 font-s48">
					Teams & Players
				</h1>
				<h2 class="h5 text-gray-dark font-s18 push-20">
					A place to find all Soccer Teams & Players
				</h2>
				<div class="push-10 text-center">
					<a class="btn btn-noborder btn-rounded btn-md btn-success push-5 padd-50-l padd-50-r" href="{{ route('team')}}"> View all Teams </a>
				</div>
			</div>
		</section>
	</div>

	<div class="bg-gray-lighter padd-20-t padd-20">
		<section class="content content-full content-boxed overflow-hidden">
			<div class="row">
				@if(!isset($teams->message))
				@foreach($teams->data as $team)
				<div class="col-lg-3">
					<div class="block block-rounded">
						<div class="block-content block-content-full">
							<div class="text-center">
								<img src="{{ path($team->logo) }}" class="push-30 img-avatar img-avatar128 remove-radius">
							</div>
							<h4 class="text-center push-10">{{ $team->name }}</h4>
							<h5 class="text-center push-10 font-w400">Team ID: {{ $team->id }}</h5>
							<div class="push-10 text-center">
								<a class="btn btn-noborder btn-rounded btn-md btn-success push-5 padd-50-l padd-50-r" href="{{ route('players',['id'=>$team->id])}}"> View </a>
							</div>
						</div>
					</div>
				</div>
				@endforeach
				@else
				@include('partials.empty.index',['icon' => 'fa fa-group','title' => 'Teams'])
				@endif
			</div>
		</section>
	</div>
</main>
@stop