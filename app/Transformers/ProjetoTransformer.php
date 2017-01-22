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
            'codigo_projeto' => $projeto->id,
            'cliente_id' => $projeto->cliente_id,
            'user_id' => $projeto->user_id,
            'membros' => $projeto->membros,
            'projeto' => $projeto->nome,
            'descricao' => $projeto->descricao,
            'progresso' => $projeto->progresso,
            'status' => $projeto->status,
            'data_inicio' => $projeto->inicio
        ];
    }

    public function includeMembros(Projeto $projeto)
    {
        return $this->collection($projeto->membros, new ProjetoMembrosTransformer());
    }
}