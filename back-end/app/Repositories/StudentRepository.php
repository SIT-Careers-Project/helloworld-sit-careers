<?php
namespace App\Repositories;
use App\Models\Students; 


class StudentRepository implements StudentRepositoryInterface
{
    public function getStudent(){
        return Students::all();
    }
}