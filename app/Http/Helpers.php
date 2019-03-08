<?php
 // Support Import
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

function title($title)
{
	return ucwords(str_replace(' and ',' & ',$title));
}

// Load file url
function path($url = '') 
{
	return Storage::disk('s3')->url($url);
}

function unlinkFile($file)
{
	Storage::disk('s3')->delete($file);
}

// Move uploaded file
function processFile($path,$file = '') 
{
	$image = Image::make($file)->fit(170, 170)->stream();
	$image_name = md5(time()) . '.' . $file->getClientOriginalExtension();
	$image_path_name = $path.'/'.$image_name;
	Storage::disk('s3')->put($image_path_name, $image->__toString(), 'public');
	return $image_path_name;
}
?>