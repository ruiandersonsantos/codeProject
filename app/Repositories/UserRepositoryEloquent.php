<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/01/2017
 * Time: 14:14
 */

namespace CodeProject\Repositories;


use CodeProject\Entities\Cliente;
use CodeProject\Entities\User;
use CodeProject\Presenters\ClientePresenter;
use Prettus\Repository\Eloquent\BaseRepository;


class UserRepositoryEloquent extends BaseRepository implements UserRepository
{

    /**
     * Specify Model class name
     *
     * @return string
     */

    public function model()
    {
        // TODO: Implement model() method.
        return User::class;
    }
}