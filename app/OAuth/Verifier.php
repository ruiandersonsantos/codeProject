<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 19/01/2017
 * Time: 22:16
 */

namespace CodeProject\OAuth;

use Illuminate\Support\Facades\Auth;

class Verifier
{
    public function verify($username, $password)
    {
        $credentials = [
            'email'    => $username,
            'password' => $password,
        ];

        if (Auth::once($credentials)) {
            return Auth::user()->id;
        }

        return false;
    }
}