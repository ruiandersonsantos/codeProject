<?php

namespace CodeProject\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Projeto extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = [
        'user_id',
        'cliente_id',
        'nome',
        'descricao',
        'progresso',
        'status',
        'inicio',
        'termino'
    ];

    public function tarefas(){
        return $this->hasMany(Tarefa::class);
    }

    public function cliente(){
        return $this->belongsTo(Cliente::class);
    }

    public function membros(){
       return $this->belongsToMany(User::class,'membros');
    }
}
