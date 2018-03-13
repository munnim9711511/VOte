'use strict'

class AuthWithRole {
  async handle ({ request,response,auth }, next) {
    // if(auth.check() & auth.user.username === "Admin"){
    //   await next()
    // }
    // else{
    //   response.redirect("/");
    // }
  }
}

module.exports = AuthWithRole
