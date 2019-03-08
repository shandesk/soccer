<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Player::class, function (Faker $faker) {
    return [
        'team_id' => mt_rand(1, 20),
		'first_name' => $faker->firstName,
		'last_name' => $faker->lastName,
		'imageUri' => 'player/default.png',
    ];
});