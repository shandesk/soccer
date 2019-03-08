<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $table = 'players';
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
        'team_id','first_name','last_name','imageUri'
    ];

    public function getFullNameAttribute()
    {
        return ucfirst($this->last_name).' '.ucfirst($this->first_name);
    }

    public function team()
    {
        return $this->hasOne(Team::class,'id','team_id')->where('status',1);
    }
}
