<?php

namespace CodeProject\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use CodeProject\Repositories\ProjetoRepository;
use CodeProject\Entities\Projeto;
use CodeProject\Validators\ProjetoValidator;

/**
 * Class ProjetoRepositoryEloquent
 * @package namespace CodeProject\Repositories;
 */
class ProjetoRepositoryEloquent extends BaseRepository implements ProjetoRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Projeto::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ProjetoValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    /**
     * @param $id
     * @param $userId
     * @return bool
     */
    public function isOwner($id, $userId){

        // Verifica se o usuario é dono do projeto.
        if(count($this->findWhere(['id'=>$id, 'user_id'=>$userId]))){
            return true;
        }

        return false;
    }
}
