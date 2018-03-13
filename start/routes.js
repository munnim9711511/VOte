'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/','VoteController.logIn');
Route.get('/login','VoteController.logIn');
Route.get('/menu','VoteController.menuPanel');
Route.get('/status','VoteController.statusDepartment');
Route.get('/admin-panel','VoteController.adminPanel');
Route.get('/logout','VoteController.logOut');
Route.get('/get-procument-data','VoteController.getDepData');


// Route.post('/test-validation','VoteController.testValidation');
Route.post('/vote-post','VoteController.voteDataEntry');
Route.post('/register-department','VoteController.registerUsre');
Route.post('/log-test','VoteController.validateUser');
