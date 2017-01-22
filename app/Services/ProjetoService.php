<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 15/01/2017
 * Time: 14:49
 */

namespace CodeProject\Services;


use CodeProject\Repositories\ProjetoRepository;
use CodeProject\Validators\ProjetoValidator;
use Prettus\Validator\Exceptions\ValidatorException;


class ProjetoService
{
    protected $repository;
    /**
     * @var ProjetoValidadtor
     */
    protected $validadtor;

    public function __construct(ProjetoRepository $repository, ProjetoValidator $validator)
    {
        $this->repository = $repository;
        $this->validadtor = $validator;
    }

    public function all(){
        // Pegando o id do usuario logado
        $userId = \Authorizer::getResourceOwnerId();

        // retornando projetos conforme o dono
        return $this->repository->findWhere(['user_id'=>$userId]);
    }

    public function create(array $data){

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

    /**
     * @param $id
     * @return array|mixed
     */
    public function show($id)
    {
       return $this->repository->find($id);
    }

    public function update(array $request, $id)
    {
        try{

            $this->validadtor->with($request)->passesOrFail();
            return $this->repository->update($request,$id);

        }catch (ValidatorException $e){
            return [
                'error' => true,
                'mensagem' => $e->getMessageBag()
            ];
        }


    }

    public function destroy($id)
    {   $this->repository->find($id)->delete($id);
        return ['sucesso' => 'deletado'];
    }
}