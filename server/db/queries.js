const knex = require('./knex')  // the connection to the database!

module.exports = {
  getAll(){
    return knex('beers')
  },

  getOne(id){
    return knex('beers').where('id', id)
  }
}