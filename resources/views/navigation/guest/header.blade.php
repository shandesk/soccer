<header id="header-navbar" class="content-mini content-mini-full">
  <div class="content-boxed">

    <ul class="nav-header pull-right">                        
      <li class="hidden-md hidden-lg">
        <button class="btn btn-link text-gray-darker pull-right" data-toggle="layout" data-action="sidebar_open" type="button">
          <i class="fa fa-navicon"></i>
        </button>
      </li>
    </ul>

    <ul class="nav-main-header pull-right push-5-t">
      <li>
        <a href="{{ route('developers') }}" class="font-s15 btn-border">
         <i class="fa fa-connectdevelop"></i> Developers
       </a>
     </li>
     <li>
      <a href="{{ route('signin') }}" class="font-s15 btn-color text-white">
        <i class="si si-arrow-right"></i> Sign In
      </a>
    </li>
  </ul>

  <ul class="nav-header pull-left">
    <li class="header-content">
      <a class="h5" href="{{ route('home') }}">
        <img src="{{ asset('images/logo/big.svg') }}" class="hidden-xs" alt="{{ config('app.name') }} logo">
        <img src="{{ asset('images/logo/small.svg') }}" class="visible-xs mini_logo push-5-t" alt="{{ config('app.name') }} mini Logo">
      </a>
    </li>
  </ul>

</div>
</header>