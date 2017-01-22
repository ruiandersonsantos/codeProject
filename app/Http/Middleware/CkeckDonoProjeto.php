<?php

namespace CodeProject\Http\Middleware;

use Closure;
use CodeProject\Repositories\ProjetoRepository;

class CkeckDonoProjeto
{
    protected $repository;

    public function __construct(ProjetoRepository $repository)
    {
        $this->repository = $repository;

    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Pegando o id do usuario logado
        $userId = \Authorizer::getResourceOwnerId();

        //pegando o id do projeto que vem pela requisição
        $projetoId = $request->projeto;

        // Só é entra aqui quando tiver id como parametro
        if(isset($projetoId))
        {
            // Verificando se o usuario é dono do projeto
            if($this->repository->isOwner($projetoId, $userId) == false){
                return ['error' => 'Acesso Negado.'];
            }
        }


        return $next($request);
    }
}
