<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'logo',
        'status',
        'last_sync',
        'data_count',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'data_count' => 'integer',
        'last_sync' => 'datetime',
    ];

    /**
     * Get the strategies using this source.
     */
    public function strategies()
    {
        return $this->belongsToMany(Strategy::class);
    }
}
