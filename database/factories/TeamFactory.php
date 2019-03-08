<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Team::class, function (Faker $faker) {
    return [
        'admin_id' => mt_rand(1, 3),
		'name' => $faker->name,
		'logoUri' => 'team/default.png',
    ];
});
