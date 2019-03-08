const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
 |--------------------------------------------------------------------------
 | Javascript
 |--------------------------------------------------------------------------
 */
 
mix.js(['resources/assets/js/bootstrap.js'],'public/js/bootstrap.js').version();
mix.scripts('resources/assets/js/app.js','public/js/app.js').version();

/*
 |--------------------------------------------------------------------------
 | StyleSheet
 |--------------------------------------------------------------------------
 */

mix.styles([
    'resources/assets/css/bootstrap.css',
    'resources/assets/css/app.css',
    'resources/assets/css/jackvils.css',
    'resources/assets/css/input.css',
	], 'public/css/app.css').version();
