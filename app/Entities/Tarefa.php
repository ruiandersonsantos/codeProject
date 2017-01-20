<?php

namespace CodeProject\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Tarefa extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = [
        'projeto_id',
        'titulo',
        'conteudo'
    ];

    public function projeto(){
        return $this->belongsTo(Projeto::class);
    }

}
