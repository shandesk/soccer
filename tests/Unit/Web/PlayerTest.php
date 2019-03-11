<?php

namespace Tests\Unit\Web;

use App\Model\User;
use App\Model\Team;
use App\Model\Player;
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
    public function test_user_can_create_players_under_authenticated_team()
    {
    	// 1. Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Team and Jump Players page
    	$team = factory(Team::class)->create(['admin_id' => $user->id]);
    	$response = $this->from('/admin/teams')->get('/admin/players/'.$team->id);
    	$response->assertStatus(200);

    	// 3. Create Player
    	$data = ['first' => "Sample",'last' => "Name"];
    	$response = $this->from('/admin/teams')->post('/admin/player/'.$team->id.'/create',$data);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/players/'.$team->id);
    	$response->assertSessionHas('message','Player created Successfully!');
    }

    public function test_user_can_create_players_under_unauthenticated_team()
    {
    	// 1. Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

		// 2. Create Player inside unauthenticated Team 
    	$data = ['first' => "Sample",'last' => "Name"];
    	$response = $this->from('/admin/teams')->post('/admin/player/1/create',$data);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$response->assertSessionHas('message','Error Occured!. Please try later.');
    }

    public function test_guest_can_create_players_under_team()
    { 
    	$data = ['first' => "Sample",'last' => "Name"];
    	$response = $this->from('/admin/teams')->post('/admin/player/1/create',$data);
    	$response->assertStatus(302);
    	$response->assertRedirect('/signin');
    }


    public function test_user_can_view_edit_player_under_team()
    {
    	// 1.Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Team
    	$team = factory(Team::class)->create(['admin_id' => $user->id]);

    	// 3. Create Player
    	$player = factory(Player::class)->create(['team_id' => $team->id]);

    	// 4. View Edit Player
    	$response = $this->get('admin/player/'.$team->id.'/edit/'.$player->id);
    	$response->assertStatus(200);
    }

    public function test_random_user_can_view_edit_player_under_team()
    {
    	// 1.Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Team
    	$team = factory(Team::class)->create(['admin_id' => 1]);

    	// 3. Create Player
    	$player = factory(Player::class)->create(['team_id' => $team->id]);

    	// 4. View Edit Player
    	$response = $this->from('admin/teams')->get('admin/player/'.$team->id.'/edit/'.$player->id);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$response->assertSessionHas('message','Error Occured!. Please try later.');
    }

    public function test_user_can_view_edit_player_under_random_team()
    {
    	// 1.Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Player with Random Team Id : 1
    	$player = factory(Player::class)->create(['team_id' => 1]);

    	// 4. View Edit Player
    	$response = $this->from('admin/teams')->get('admin/player/1/edit/'.$player->id);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$response->assertSessionHas('message','Error Occured!. Please try later.');
    }

    public function test_user_can_update_player_under_team()
    {
    	// 1.Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Team
    	$team = factory(Team::class)->create(['admin_id' => $user->id]);

    	// 3. Create Player
    	$player = factory(Player::class)->create(['team_id' => $team->id]);

    	// 4. Update Player
    	$data = ['first' => "Name",'last' => "Sample"];
    	$response = $this->from('admin/player/'.$team->id.'/edit/'.$player->id)->post('admin/player/'.$team->id.'/edit/'.$player->id,$data);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/player/'.$team->id.'/edit/'.$player->id);
    	$response->assertSessionHas('message','Player updated Successfully!');
    }

    public function test_user_can_update_player_under_random_team()
    {
    	// 1.Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Player under Random Team : 1
    	$player = factory(Player::class)->create(['team_id' => 1]);

    	// 3. Update Player
    	$data = ['first' => "Name",'last' => "Sample"];
    	$response = $this->from('admin/teams')->post('admin/player/1/edit/'.$player->id,$data);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$response->assertSessionHas('message','Error Occured!. Please try later.');
    }

    public function test_random_user_can_update_player_under_team()
    {
    	// 1.Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Team
    	$team = factory(Team::class)->create(['admin_id' => 1]);

    	// 3. Create Player
    	$player = factory(Player::class)->create(['team_id' => $team->id]);

    	// 4. Update Player
    	$data = ['first' => "Name",'last' => "Sample"];
    	$response = $this->from('admin/teams')->post('admin/player/'.$team->id.'/edit/'.$player->id,$data);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$response->assertSessionHas('message','Error Occured!. Please try later.');
    }

    public function test_user_can_delete_player_under_team()
    {
    	// 1.Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Team
    	$team = factory(Team::class)->create(['admin_id' => $user->id]);

    	// 3. Create Player
    	$player = factory(Player::class)->create(['team_id' => $team->id]);

    	// 4. Update Player
    	$response = $this->from('admin/player/'.$team->id.'/edit/'.$player->id)->get('admin/player/'.$team->id.'/delete/'.$player->id);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/players/'.$team->id);
    	$response->assertSessionHas('message','Player deleted Successfully!');
    }

    public function test_user_can_delete_player_under_random_team()
    {
    	// 1.Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Player under Random Team : 1
    	$player = factory(Player::class)->create(['team_id' => 1]);

    	// 3. Update Player
    	$response = $this->from('admin/teams')->get('admin/player/1/delete/'.$player->id);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$response->assertSessionHas('message','Error Occured!. Please try later.');
    }

    public function test_user_can_delete_random_player_under_team()
    {
    	// 1.Auth User
    	$user = factory(User::class)->create(['password' => bcrypt('secret')]);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Create Team
    	$team = factory(Team::class)->create(['admin_id' => $user->id]);

    	// 2. Create Player
    	$player = factory(Player::class)->create(['team_id' => 10]);

    	// 4. Update Player
    	$response = $this->from('admin/players/'.$team->id)->get('admin/player/'.$team->id.'/delete/'.$player->id);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/players/'.$team->id);
    	$response->assertSessionHas('message','Error Occured!. Please try later.');
    }
}
