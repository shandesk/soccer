@extends('layout.guest.root')

@section('title') A Platform for Teams & Players @stop
@section('robots') INDEX,ALLOW @stop
@section('content')
<main id="main-container">
	<div class="bg-white">
		<section class="content content-full content-boxed overflow-hidden">
			<div class="push-100-t push-100 text-center">
				<img src="{{ path($players->team->logo) }}" class="push-30 img-avatar img-avatar128 remove-radius">
				<h1 class="h1 font-w700 text-gray-darker push-10 font-s48">
					{{ $players->team->name }}
				</h1>
			</div>
		</section>
	</div>
	<div class="bg-gray-lighter padd-20-t padd-20">
		<section class="content content-full content-boxed overflow-hidden">
			<div class="row">
				@if(!isset($players->message))
				@foreach($players->data as $player)
				<div class="col-lg-3">
					<div class="block block-rounded">
						<div class="block-content block-content-full">
							<div class="text-center">
								<img src="{{ path($player->image) }}" class="push-30 img-avatar img-avatar128 remove-radius">
							</div>
							<h4 class="text-center push-10">{{ $player->fullname }}</h4>
						</div>
					</div>
				</div>
				@endforeach
				@else
				@include('partials.empty.index',['icon' => 'fa fa-group','title' => 'Players'])
				@endif
			</div>
		</section>
	</div>
</main>
@stop