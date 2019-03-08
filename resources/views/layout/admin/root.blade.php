<!DOCTYPE html>
<!--[if IE 9]> <html class="ie9 no-focus" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-focus" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>@yield('title') - {{ ucfirst(config('app.name')) }}</title>
    <meta name="description" content="@yield('description')">
    <meta name="robots" content="NOINDEX, NOFOLLOW">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0">
    <link rel="shortcut icon" href="{{ asset('favicon.png') }}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700%7COpen+Sans:300,400,400italic,600,700">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- CSS Code -->
    <link rel="stylesheet" href="{{ asset(mix('/css/app.css')) }}">
    @yield('css')
    <!-- CSS Code -->
</head>
<body>
    @include('helper.activity.message')

    <div id="page-container" class="sidebar-l sidebar-mini side-scroll header-navbar header-shadow">

        @include('navigation.admin.sidebar')
        @include('navigation.admin.header')

        <main id="main-container"> 
            <section class="content content-boxed special-content">
                @yield('content')
            </section>
        </main>
        @include('navigation.admin.footer')
    </div>

    <!-- JS Code -->
    <script src="{{ asset(mix('/js/bootstrap.js')) }}"></script>
    <script src="{{ asset(mix('/js/app.js')) }}"></script>

    @yield('script')
    <!-- JS Code -->
</body>
</html>