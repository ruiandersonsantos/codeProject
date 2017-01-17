<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/01/2017
 * Time: 14:49
 */

namespace CodeProject\Services;


use CodeProject\Repositories\TarefaRepository;
use CodeProject\Validators\TarefaValidator;
use Prettus\Validator\Exceptions\ValidatorException;


class TarefaService
{
    protected $repository;
    /**
     * @var TarefaValidadtor
     */
    protected $validadtor;

    public function __construct(TarefaRepository $repository, TarefaValidator $validator)
    {
        $this->repository = $repository;
        $this->validadtor = $validator;
    }

    public function all($id){
        return $this->repository->findWhere(['projeto_id'=>$id]);
    }

    public function store(array $data){

        try{
            $this->validadtor->with($data)->passesOrFail();
            return $this->repository->create($data);
        }catch (ValidatorException $e){
            return [
                'error' => true,
                'mensagem' => $e->getMessageBag()
            ];
        }


    }

    public function show($id,$tarefaId)
    {
        return $this->repository->findWhere(['projeto_id' =>$id, 'id'=>$tarefaId]);
    }

    public function update(array $request, $id, $tarefaId)
    {
        try{

            $this->validadtor->with($request)->passesOrFail();
            return $this->repository->update($request,$tarefaId);

        }catch (ValidatorException $e){
            return [
                'error' => true,
                'mensagem' => $e->getMessageBag()
            ];
        }


    }

    public function destroy($id, $tarefaId)
    {
        return $this->repository->find($id)->delete($tarefaId);
    }
}