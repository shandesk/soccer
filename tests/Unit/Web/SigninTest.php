<?php

namespace Tests\Unit\Web;

use App\Model\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SigninTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_user_can_view_a_login_form()
    {
    	$response = $this->get('/signin');
    	$response->assertSuccessful();
    	$response->assertViewIs('views.guest.auth.signin');
    }

    public function test_user_cannot_view_a_login_form_when_authenticated()
    {
    	// 1. Auth User
    	$user = User::find(1);
    	$response = $this->post('signin',['email' => $user->email,'password'=>'secret']);
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    	$this->assertAuthenticatedAs($user);

    	// 2. Visit Signin Page
    	$response = $this->get('/signin');
    	$response->assertStatus(302);
    	$response->assertRedirect('admin/teams');
    }

    public function test_user_can_login_with_correct_credentials()
    {
    	// 1. Auth User
        $user = factory(User::class)->create(['password' => bcrypt($password = 'secret')]);
        $response = $this->post('/signin', ['email' => $user->email,'password' => $password]);
        $response->assertRedirect('/admin/teams');
        $this->assertAuthenticatedAs($user);
    }

    public function test_user_cannot_login_with_incorrect_password()
    {
        // 1. Auth User
        $user = factory(User::class)->create(['password' => bcrypt('secret')]);
        $response = $this->from('/signin')->post('/signin', ['email' => $user->email,'password' => 'invalid-password']);
        $response->assertRedirect('/signin');
        $this->assertGuest();
    }
}
