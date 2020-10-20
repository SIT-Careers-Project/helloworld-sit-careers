<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\StudentRepositoryInterface;

class StudentController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    private $students;

    public function __construct(StudentRepositoryInterface $studentRepo) {
        $this->students = $studentRepo;
    }

    public function get(Request $request)
    {
        $student_list = $this->students->getStudent();
        return response()->json($student_list , 200);
    }
}