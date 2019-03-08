<!DOCTYPE html>
<!--[if IE 9]> <html class="ie9 no-focus" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-focus" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>@yield('title') - {{ ucfirst(config('app.name')) }}</title>
    <meta name="description" content="@yield('description')">
    <meta name="robots" content="@yield('robots')">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0">
    <link rel="shortcut icon" href="{{ asset('favicon.png') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700%7COpen+Sans:300,400,400italic,600,700">
    <!-- CSS Code -->
    <link rel="stylesheet" href="{{ asset(mix('/css/app.css')) }}">
    @yield('css')
    <!-- CSS Code -->
</head>
<body>
    @include('helper.activity.message')

    <div id="page-container" class="sidebar-l sidebar-mini side-scroll header-navbar header-shadow">
        
        @if(!Auth::user())
            
            @include('navigation.guest.sidebar')
            @include('navigation.guest.header')
        
        @else
            
            @include('navigation.admin.sidebar')
            @include('navigation.admin.header')

        @endif
        
        @yield('content')
        @include('navigation.guest.footer')

    </div>
    <!-- JS Code -->
    <script src="{{ asset(mix('/js/bootstrap.js')) }}"></script>
    <script src="{{ asset(mix('/js/app.js')) }}"></script>
    @yield('script')
    <!-- JS Code -->
</body>
</html>