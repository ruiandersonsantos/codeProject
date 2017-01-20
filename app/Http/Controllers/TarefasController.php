<?php

namespace CodeProject\Http\Controllers;


use CodeProject\Services\TarefaService;
use Illuminate\Http\Request;




class TarefasController extends Controller
{
    private $tarefaService;

    public function __construct(TarefaService $tarefaService)
    {
        $this->tarefaService = $tarefaService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        return $this->tarefaService->all($id);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return $this->tarefaService->create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, $tarefaId)
    {
        return $this->tarefaService->show($id,$tarefaId);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id, $tarefaId)
    {
        return $this->tarefaService->update($request->all(),$id,$tarefaId);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, $tarefaId)
    {
        return $this->tarefaService->destroy($id,$tarefaId);
    }
}
