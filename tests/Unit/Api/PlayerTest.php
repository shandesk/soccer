<?php

namespace Tests\Unit\Api;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PlayerTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testGettingSingleTeamPlayersTest()
    {
    	$response = $this->json('GET','/api/v1/teams/1');
    	$response->assertStatus(200);
    	$response->assertJsonStructure(
    		[
    			'data' => [['id','fullname','image']]
    		]
    	);
    }

    public function testGetting404ErrorByCallingMismatchTeamIdTest()
    {
    	$response = $this->json('GET','/api/v1/teams/de');
    	$response->assertStatus(404);
    }
}
