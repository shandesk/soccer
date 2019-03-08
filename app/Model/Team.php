<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $table = 'teams';
    /**
     * Set Timestamps to False.
     *
     * @var array
     */
    public $timestamps = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'admin_id','name','logoUri',
    ];

    public function players()
    {
        return $this->hasMany(Player::class,'team_id','id')->where('status',1);
    }

    public function player($id)
    {
        return $this->hasOne(Player::class,'team_id','id')->where('status',1)->where('id',$id)->first();
    }
}
