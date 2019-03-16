<?php

namespace Tests\Unit\Web;

use App\Model\User;
use App\Model\Team;
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
    public function test_user_can_create_team()
    {
        // 1. Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

        // 2. Create Team
    	$response = $this->from('/admin/teams')->post('/admin/team/create',['name' => "Devon"]);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    }

    public function test_guest_can_create_team()
    { 
        // 1. Create Team
    	$response = $this->from('/admin/teams')->post('/admin/team/create',['name' => "New Product"]);
    	$response->assertStatus(302);
    	$response->assertRedirect('/signin');
    }

    public function test_user_can_edit_team()
    {
        // 1. Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

        // 2. Edit Team
    	$team = factory(Team::class)->create(['admin_id' => $user->id]);
    	$response = $this->get('admin/team/edit/'.$team->id);
    	$response->assertStatus(200);
    }

    public function test_random_user_can_edit_team()
    {
        // 1. Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

        // 2. Edit Team with random Admin id: 1
    	$team = factory(Team::class)->create(['admin_id' => 1]);
    	$response = $this->from('admin/teams')->get('admin/team/edit/'.$team->id);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    }

    public function test_user_can_update_team()
    {
        // 1. Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

        // 2. Create Team
    	$team = factory(Team::class)->create(['admin_id' => $user->id]);
    	$response = $this->get('admin/team/edit/'.$team->id);
    	$response->assertStatus(200);
    	
        // 3. Update Team
    	$response = $this->from('admin/team/edit/')->post('admin/team/edit/'.$team->id,['name' => 'testing']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/team/edit/'.$team->id);
    }

    public function test_random_user_can_update_team()
    {
        // 1. Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

        // 2. Update Team with Random User : 1
    	$team = factory(Team::class)->create(['admin_id' => 1]);
    	$response = $this->from('admin/teams')->post('admin/team/edit/'.$team->id,['name' => 'testing']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
        $response->assertSessionHas('message','Error Occured!. Please try later.');
    }

    public function test_user_can_delete_team()
    {
        // 1. Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

        // 2. Delete Team
    	$team = factory(Team::class)->create(['admin_id' => $user->id]);
    	$response = $this->from('admin/teams')->get('admin/team/delete/'.$team->id);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$response->assertSessionHas('message','Team & players deleted Successfully!');
    }

    public function test_random_user_can_delete_team()
    {
        // 1. Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

        // 2. Delete Team with Random User : 1
    	$team = factory(Team::class)->create(['admin_id' => 1]);
    	$response = $this->from('admin/teams')->get('admin/team/delete/'.$team->id);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$response->assertSessionHas('message','Error Occured!. Please try later.');
    }
}
