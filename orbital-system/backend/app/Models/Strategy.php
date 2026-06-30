<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Strategy extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'icon',
        'match_score',
        'time_estimate',
        'cost_estimate',
        'accuracy',
        'category',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'match_score' => 'integer',
    ];

    /**
     * Get the sources for the strategy.
     */
    public function sources()
    {
        return $this->belongsToMany(Source::class);
    }

    /**
     * Get the intentions using this strategy.
     */
    public function intentions()
    {
        return $this->belongsToMany(Intention::class);
    }
}
