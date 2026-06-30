<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Intention extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'query',
        'budget_max',
        'currency',
        'location',
        'radius_km',
        'condition',
        'category',
        'user_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'budget_max' => 'integer',
        'radius_km' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the strategies for the intention.
     */
    public function strategies()
    {
        return $this->belongsToMany(Strategy::class);
    }

    /**
     * Get the history events for the intention.
     */
    public function history()
    {
        return $this->hasMany(HistoryEvent::class);
    }
}
