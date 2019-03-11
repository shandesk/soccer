<?php

namespace Tests\Unit\Api;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TeamTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testGettingAllTeamsTest()
    {
    	$response = $this->json('GET','/api/v1/teams');
    	$response->assertStatus(200);
    	$response->assertJsonStructure(
    		[
    			'data' => [['id','name','logo','uri']]
    		]
    	);
    }
}
