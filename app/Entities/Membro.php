<?php

namespace CodeProject\Entities;

use Illuminate\Database\Eloquent\Model;

class Membro extends Model
{
    protected $fillable = [
        'projeto_id',
        'user_id'
    ];
}
