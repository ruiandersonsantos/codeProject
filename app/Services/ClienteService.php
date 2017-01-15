<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/01/2017
 * Time: 14:49
 */

namespace CodeProject\Services;


use CodeProject\Repositories\ClienteRepository;
use Illuminate\Http\Request;

class ClienteService
{
    protected $repository;

    public function __construct(ClienteRepository $repository)
    {
        $this->repository = $repository;
    }

    public function all(){
        return $this->repository->all();
    }

    public function store(array $data){
        return $this->repository->create($data);
    }

    public function show($id)
    {
        return $this->repository->find($id);
    }

    public function update(array $request, $id)
    {
        $this->repository->update($request,$id);
        return $this->repository->find($id);
    }

    public function destroy($id)
    {
        return $this->repository->find($id)->delete($id);
    }
}