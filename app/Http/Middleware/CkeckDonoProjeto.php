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

        // Só é entra aqui quando tiver id como parametro na URL
        // Esse trecho controla show, update e delete
        if(isset($projetoId))
        {
            // Verificando se o usuario é dono do projeto
            if($this->repository->isOwner($projetoId, $userId) == true){
                return $next($request);
            }

            // Verificando se o usuario é membro do projeto
            // Só poderá visualizar
            if($this->repository->isMembro($projetoId,$userId) == true && $request->getMethod() == 'GET'){

                return $next($request);

            }
        }elseif($request->getMethod() == 'GET'){
            // Liberar todas as requisições GET sem parametro
            return $next($request);
        }

        if($request->getMethod() == 'POST'){
            return $next($request);
        }


        return ['error' => 'Acesso Negado.'];
    }
}
