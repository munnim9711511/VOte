'use strict'

class AuthWithRole {
  async handle ({ request,response,auth }, next) {

try{
  await auth.check()
  if(auth.check() && auth.user.username === "Admin"){
    await next()
  }
} catch (error) {
      response.redirect("/");
}



}



  }


module.exports = AuthWithRole
