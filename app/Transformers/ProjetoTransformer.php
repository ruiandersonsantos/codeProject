<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 22/01/2017
 * Time: 19:47
 */

namespace CodeProject\Transformers;

use CodeProject\Entities\Projeto;
use League\Fractal\TransformerAbstract;

class ProjetoTransformer extends TransformerAbstract
{
    protected $defaultIncludes = ['membros'];


    public function transform(Projeto $projeto){

        return [
            'id' => $projeto->id,
            'cliente' => $projeto->cliente,
            'user_id' => $projeto->user_id,
            'membros' => $projeto->membros,
            'nome' => $projeto->nome,
            'descricao' => $projeto->descricao,
            'progresso' => (int) $projeto->progresso,
            'status' => $projeto->status,
            'inicio' => $projeto->inicio,
            'termino' => $projeto->termino
        ];
    }

    public function includeMembros(Projeto $projeto)
    {
        return $this->collection($projeto->membros, new ProjetoMembrosTransformer());
    }

    public function includeCliente(Projeto $projeto)
    {
        return $this->collection($projeto->cliente, new ClienteTransformer());
    }
}