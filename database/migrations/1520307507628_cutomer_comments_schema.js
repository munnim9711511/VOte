'use strict'

const Schema = use('Schema')

class CutomerCommentsSchema extends Schema {
  up () {
    this.create('cutomer_comments', (table) => {
      table.increments()
      table.string("vote")
      table.string("department")
      table.string("service")
      table.date('service_date');
      table.timestamps()
    })
  }

  down () {
    this.drop('cutomer_comments')
  }
}

module.exports = CutomerCommentsSchema
