'use strict'

//============================================
/* this is a function for getting the date
diffrent from two date that are send from the
admin panel
*/

 function daysBetween( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;

  // Convert back to days and return
  return Math.round(difference_ms/one_day);
}

//end of the function

//==============================================================

/*function for pharsing the data*/

function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}

//end of the function
//==========================================================================
const cutomerV = use("App/Models/CustomerComment");
const user = use("App/Models/User");
class VoteController {

  async logIn({view}){
    const userRegistration = new user();

    // userRegistration.username = "Admin";
    // userRegistration.password = "welcome@mpl"
    //
    // userRegistration.save();
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
  async getDepData({response,view,request}){

    // request.input("sdate"),request.input("edate")

const day1 = request.input("sdate");
const day2 = request.input("edate");
const dep = request.input("dep");
const DateOne = parseDate(day1);
const DateTwo = parseDate(day2);
const d = daysBetween(DateOne,DateTwo);
console.log(d);
// const defferent = day2-day1;
console.log(day1)

  const wellComunicated = await cutomerV
   .query()
   .where('department','=',dep)
   .where('service','=','communication')
   .where('vote','=','well comunicated')
   .where('service_date','>=',day1)
   .where('service_date','<=',day2)
   .getCount();
   console.log(wellComunicated)



   const needImprovmentComunication  = await cutomerV
  .query()
  .where('department','=',dep)
  .where('service','=','communication')
  .where('vote','=','need improvement in comunication')
  .where('service_date','>=',day1)
  .where('service_date','<=',day2)
  .getCount();


  const poorComunication  = await cutomerV
 .query()
 .where('department','=',dep)
 .where('service','=','communication')
 .where('vote','=','very poor communication')
 .where('service_date','>=',day1)
 .where('service_date','<=',day2)
 .getCount();



 const totalCommunicated = poorComunication+needImprovmentComunication+wellComunicated;
 const percentwellComunication =((wellComunicated *100)/totalCommunicated).toFixed(2);
 const percentNeedImrpovement = ((needImprovmentComunication*100)/totalCommunicated).toFixed(2);
 const percentPoorComunication = ((poorComunication*100)/totalCommunicated).toFixed(2);
//===================================================================================
 const wellService = await cutomerV
  .query()
  .where('department','=',dep)
  .where('service','=','service')
  .where('vote','=','well service')
  .where('service_date','>=',day1)
  .where('service_date','<=',day2)
  .getCount();


  const needImprovementService = await cutomerV
   .query()
   .where('department','=',dep)
   .where('service','=','service')
   .where('vote','=','need improvement in service')
   .where('service_date','>=',day1)
   .where('service_date','<=',day2)
   .getCount();

   const poorService = await cutomerV
    .query()
    .where('department','=','dep')
    .where('service','=','service')
    .where('vote','=','very poor service')
    .where('service_date','=',day1)
    .where('service_date','=',day2)
    .getCount();


    const totalService = wellService+needImprovementService+poorService;
    const percentWellService = ((wellService * 100)/totalService).toFixed(2);
    const percentImprovementService = ((wellService * 100)/totalService).toFixed(2);
    const percentPoorService = ((wellService * 100)/totalService).toFixed(2);

//=========================================================================================
const data = [

  percentwellComunication,
  percentNeedImrpovement,
  percentPoorComunication,
  percentWellService,
  percentImprovementService,
  percentPoorService

];
return view.render("report",{data});

  }


}

module.exports = VoteController
