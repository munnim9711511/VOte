'use strict'


const cutomerV = use("App/Models/CustomerComment");
const user = use("App/Models/User");
class VoteController {

  async logIn({view}){
    return view.render('login');

  }
  async menuPanel({view}){
    return view.render('menu');
  }

  async voteDataEntry({request,auth}){

    //getting current data using java script


    //end of the dat getting code


    const cVote = new cutomerV();
    cVote.vote = request.input("vote");
    cVote.service = request.input("type");
    cVote.department =auth.user.username;
    cVote.service_date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    cVote.save();
    return `vote caim ${request.input('vote')}`;
    // console.log(auth.user.username);
  }

  async statusDepartment(){

  }
  async adminPanel({view}){
    return view.render("admin")
  }
  async registerUsre({view,request,response}){
    const userRegistration = new user();
    userRegistration.username = request.input("department");
    userRegistration.password = request.input("pass");

    userRegistration.save();
    response.redirect("/admin-panel");
  }
  async validateUser({view,request,response,auth}){
    const { username, password } = request.all()
     await auth.attempt(username, password)

     // return auth.getUser().username;

           if(auth.user.username === "Admin"){
             response.redirect("/admin-panel");
           }
           else{
             response.redirect("/menu");
           }

  }
  async logOut({auth,response}){
    await auth.logout()
     response.redirect("/");
  }
  async getDepData(){
    let x=[];
    // const wellcomunicatedCount =

    return await cutomerV
   .query()
   .where('department','=','Procument')
   .where('service','=','communication')
   .where('vote','=','well comunicated')
   .where('service_date','=',"2018-03-13")
   .getCount();

//    const needImprovmentComunication  = await cutomerV
//   .query()
//   .where('department','=','Procument')
//   .where('service','=','communication')
//   .where('vote','=','need improvement in comunication')
//   .where('service_date','=',"2018-03-13")
//   .getCount();
//
//   const poorComunication  = await cutomerV
//  .query()
//  .where('department','=','Procument')
//  .where('service','=','communication')
//  .where('vote','=','very poor communication')
//  .where('service_date','=',"2018-03-13")
//  .getCount();
//
//
// return x;

  }


}

module.exports = VoteController
