<!-- Header -->
<header id="header-navbar" class="content-mini content-mini-full">
    <div class="content-boxed">
        <!-- Header Navigation Right -->
        <ul class="nav-header pull-right">                        
            <li class="hidden-md hidden-lg">
                <button class="btn btn-link text-gray-darker pull-right" data-toggle="layout" data-action="sidebar_open" type="button">
                    <i class="fa fa-navicon"></i>
                </button>
            </li>
        </ul>
        <!-- END Header Navigation Right -->

        <!-- Main Header Navigation -->
        <ul class="js-nav-main-header nav-main-header pull-right">
            <li>
                <a href="{{ route('adminTeam') }}" class="font-s15 btn-color text-white">
                    <i class="fa fa-group"></i> Teams
                </a>
            </li>
            <li>                           
                <a class="nav-submenu" href="javascript:void(0)">
                    Hi, {{ ucfirst(Auth::user()->name) }}
                </a>
                <ul>
                    <li> <a href="{{ route('adminSignout') }}"> Sign Out </a> </li>
                </ul>
            </li>
        </ul>
        <!-- END Main Header Navigation -->

        <!-- Header Navigation Left -->
        <ul class="nav-header pull-left">
            <li class="header-content">
               <a class="h5" href="{{ route('adminTeam') }}">
                <img src="{{ asset('images/logo/big.svg') }}" class="hidden-xs" alt="{{ config('app.name') }} logo">
      <img src="{{ asset('images/logo/small.svg') }}" class="visible-xs mini_logo push-5-t" alt="{{ config('app.name') }} mini Logo">
            </a>
        </li>
    </ul>
    <!-- END Header Navigation Left -->                    
</div>
</header>
            <!-- END Header -->