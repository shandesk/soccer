<!-- Sidebar -->
<nav id="sidebar">
    <!-- Sidebar Scroll Container -->
    <div id="sidebar-scroll">
        <!-- Sidebar Content -->
        <div class="sidebar-content">
            <!-- Side Header -->
            <div class="side-header side-content">
                <button class="btn btn-link text-gray-darker pull-right visible-xs visible-sm" type="button" data-toggle="layout" data-action="sidebar_close">
                    <i class="fa fa-times"></i>
                </button>                            
                <a class="h5" href="{{ route('adminTeam') }}">                               
                    <img src="{{ asset('images/logo/big.svg') }}" class="hidden-xs" alt="{{ config('app.name') }} logo">
      <img src="{{ asset('images/logo/small.svg') }}" class="visible-xs mini_logo push-5-t" alt="{{ config('app.name') }} mini Logo">
                </a>
            </div>
            <!-- END Side Header -->

            <!-- Side Content -->
            <div class="side-content side-content-full">
                <ul class="nav-main">
                    <li>
                        <a href="{{ route('adminTeam') }}">
                            Team
                        </a>
                    </li>
                    <li>
                        <a class="nav-submenu" data-toggle="nav-submenu" href="#">
                            <i class="si si-user"></i> Hi, {{ ucfirst(Auth::user()->name) }}
                        </a>
                        <ul>
                            <li> <a href="{{ route('adminSignout') }}"> Sign Out </a> </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- END Side Content -->
        </div>
        <!-- Sidebar Content -->
    </div>
    <!-- END Sidebar Scroll Container -->
</nav>
<!-- END Sidebar -->