<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/01/2017
 * Time: 14:14
 */

namespace CodeProject\Repositories;


use CodeProject\Entities\Cliente;
use CodeProject\Presenters\ClientePresenter;
use Prettus\Repository\Eloquent\BaseRepository;


class ClienteRepositoryEloquent extends BaseRepository implements ClienteRepository
{
    protected $fieldSearchable = [
        'nome',
        'email'
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function presenter()
    {
        return ClientePresenter::class;
    }

    public function model()
    {
        // TODO: Implement model() method.
        return Cliente::class;
    }

    public function boot()
    {
       $this->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
    }
}