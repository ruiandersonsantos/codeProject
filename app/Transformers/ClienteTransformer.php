<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 22/01/2017
 * Time: 19:47
 */

namespace CodeProject\Transformers;

use CodeProject\Entities\Cliente;
use League\Fractal\TransformerAbstract;

class ClienteTransformer extends TransformerAbstract
{
    public function transform(Cliente $cliente){

        return [
            'id' => $cliente->id,
            'nome' => $cliente->nome,
            'responsavel' => $cliente->responsavel,
            'email' => $cliente->email,
            'telefone' => $cliente->telefone,
            'endereco' => $cliente->endereco,
            'obs' => $cliente->obs
        ];
    }


}