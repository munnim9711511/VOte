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
  async voteDataEntry({request}){
    // const auth =request.auth;
    const cVote = new cutomerV();
    cVote.vote = request.input("vote");
    cVote.service = request.input("type");
    // cVote.department = request(auth.currentUser);
    cVote.save();
    return `vote caim ${request.input('vote')}`;
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


}

module.exports = VoteController
