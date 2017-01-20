<?php

namespace CodeProject\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class TarefaValidator extends LaravelValidator
{

    protected $rules = [
        'projeto_id' => 'required',
        'titulo' => 'required',
        'conteudo'  => 'required'
   ];
}
