<?php 
$action = (!session('action')) ? '':session('action'); 
$type = (!session('type')) ? '':session('type'); 
$message = (!session('message')) ? '':session('message'); 
?>
@switch($action)

    @case('common')
        <div class="alert alert-{{ $type }} alert-dismissable font-w600 text-center remove-margin pull-15-b">
        	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        	{{ $message }}
        </div>
    @break

@endswitch