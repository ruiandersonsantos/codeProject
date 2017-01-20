<?php

namespace CodeProject\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class ProjetoValidator extends LaravelValidator
{

    protected $rules = [
        'user_id' => 'required',
        'cliente_id'=> 'required',
        'nome'=> 'required',
        'descricao'=> 'required',
        'progresso'=> 'required',
        'status'=> 'required',
        'inicio'=> 'required'
   ];
}
