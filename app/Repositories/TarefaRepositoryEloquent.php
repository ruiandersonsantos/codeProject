<?php

namespace CodeProject\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use CodeProject\Repositories\TarefaRepository;
use CodeProject\Entities\Tarefa;
use CodeProject\Validators\TarefaValidator;

/**
 * Class TarefaRepositoryEloquent
 * @package namespace CodeProject\Repositories;
 */
class TarefaRepositoryEloquent extends BaseRepository implements TarefaRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Tarefa::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return TarefaValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
}
