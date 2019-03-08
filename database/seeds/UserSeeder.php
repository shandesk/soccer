<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $users = [
        [
            'name' => 'one',
            'email' => 'one@gmail.com',
            'password' => '$2y$10$ZCK5eFbukBczKfGWEyumqeQwlXufPDx35PRrsZz0nl/0aAXWNhUby',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ],
        [
            'name' => 'two',
            'email' => 'two@gmail.com',
            'password' => '$2y$10$ZCK5eFbukBczKfGWEyumqeQwlXufPDx35PRrsZz0nl/0aAXWNhUby',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ],
        [
            'name' => 'three',
            'email' => 'three@gmail.com',
            'password' => '$2y$10$ZCK5eFbukBczKfGWEyumqeQwlXufPDx35PRrsZz0nl/0aAXWNhUby',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ],
    ];
    DB::table('users')->insert($users);
}
}