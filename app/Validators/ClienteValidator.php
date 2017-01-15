<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/01/2017
 * Time: 18:15
 */

namespace CodeProject\Validators;


use Prettus\Validator\LaravelValidator;

class ClienteValidator extends LaravelValidator
{
    protected $rules = [
        'nome' => 'required|max:255',
        'responsavel' => 'required|max:255',
        'email' => 'required|email',
        'telefone' => 'required',
        'endereco' => 'required|max:255',
    ];
}