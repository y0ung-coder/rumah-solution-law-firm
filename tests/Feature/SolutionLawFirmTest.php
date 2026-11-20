<?php

namespace Tests\Feature;

use App\Models\Consultation;
use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SolutionLawFirmTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(DatabaseSeeder::class);
    }

    /**
     * Test homepage renders successfully.
     */
    public function test_homepage_loads_successfully(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('Solution Law Firm');
        $response->assertSee('Samuel Tambunan');
    }

    /**
     * Test consultation request submission and storage.
     */
    public function test_consultation_form_stores_data(): void
    {
        $response = $this->post('/consultation', [
            'name' => 'Bambang Santoso',
            'email' => 'bambang.santoso@example.com',
            'phone' => '081234567890',
            'service' => 'Corporate & Business Law',
            'notes' => 'Permohonan konsultasi audit merger bisnis.',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('consultations', [
            'email' => 'bambang.santoso@example.com',
            'service' => 'Corporate & Business Law',
        ]);
    }

    /**
     * Test honeypot stops spam bots.
     */
    public function test_honeypot_blocks_spam(): void
    {
        $response = $this->post('/consultation', [
            'name' => 'Spam Bot',
            'email' => 'bot@spam.com',
            'phone' => '081234567890',
            'service' => 'Corporate & Business Law',
            'notes' => 'Spam test',
            'bot_check' => 'I am a bot',
        ]);

        $this->assertDatabaseMissing('consultations', [
            'email' => 'bot@spam.com',
        ]);
    }

    /**
     * Test unauthorized access to admin is redirected to login.
     */
    public function test_unauthorized_admin_access_redirects(): void
    {
        $response = $this->get('/admin');
        $response->assertRedirect('/admin/login');
    }

    /**
     * Test admin authentication and access to dashboard.
     */
    public function test_admin_can_login_and_access_dashboard(): void
    {
        $admin = User::first();

        $response = $this->actingAs($admin)->get('/admin');
        $response->assertStatus(200);
    }
}
