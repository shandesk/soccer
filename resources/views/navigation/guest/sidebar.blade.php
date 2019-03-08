<nav id="sidebar">    
    <div id="sidebar-scroll">
        <div class="sidebar-content">
            
            <div class="side-header side-content">
                <button class="btn btn-link text-gray-darker pull-right visible-xs visible-sm" type="button" data-toggle="layout" data-action="sidebar_close">
                    <i class="fa fa-times"></i>
                </button>                            
                <a class="h5" href="{{ route('home') }}">
                    <img src="{{ asset('images/logo/big.svg') }}" class="hidden-xs" alt="{{ config('app.name') }} logo">
      <img src="{{ asset('images/logo/small.svg') }}" class="visible-xs mini_logo push-5-t" alt="{{ config('app.name') }} mini Logo">
                </a>
            </div>

            <div class="side-content side-content-full">
                <ul class="nav-main">
                    <li>
                        <a href="{{ route('signin') }}" class="font-s13">
                            <i class="si si-arrow-right"></i> Sign In
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('developers') }}" class="font-s13">
                            <i class="si si-arrow-right"></i> Developers
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>    
</nav>