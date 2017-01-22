<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 22/01/2017
 * Time: 19:59
 */

namespace CodeProject\Presenters;

use CodeProject\Transformers\ProjetoTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

class ProjetoPresenter extends FractalPresenter
{

    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ProjetoTransformer();
    }
}