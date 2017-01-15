<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/01/2017
 * Time: 14:14
 */

namespace CodeProject\Repositories;


use CodeProject\Entities\Cliente;
use Prettus\Repository\Eloquent\BaseRepository;
use Symfony\Component\HttpKernel\Client;

class ClienteRepositoryEloquent extends BaseRepository implements ClienteRepository
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        // TODO: Implement model() method.
        return Cliente::class;
    }
}