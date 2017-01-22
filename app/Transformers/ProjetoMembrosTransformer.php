<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 22/01/2017
 * Time: 19:47
 */

namespace CodeProject\Transformers;

use CodeProject\Entities\Projeto;
use CodeProject\Entities\User;
use League\Fractal\TransformerAbstract;

class ProjetoMembrosTransformer extends TransformerAbstract
{
    public function transform(User $user){

        return [
            'membro_id' => $user->id,
            'nome' => $user->name
        ];
    }
}