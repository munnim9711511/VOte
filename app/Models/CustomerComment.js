'use strict'

const Model = use('Model')

class CustomerComment extends Model {

  static get table(){
    return 'cutomer_comments';
  }
}

module.exports = CustomerComment
