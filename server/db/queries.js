const knex = require('./knex')  // the connection to the database!

module.exports = {
  getAll(){
    return knex('beers')
  },

  getOne(idOrName){
    if (!isNaN(idOrName)) {
      return knex('beers').where('id', idOrName)
    } 
    return knex('beers').where('name', idOrName)
  },


  addBeer(params){
    const { name, description, alcohol} = params
    return knex('beers')
      .insert({ 'name': name, 'description': description, 'alcohol': parseFloat(alcohol)})
      .then(() => {
        return knex('beers')
          .where({'name': name})
          .select()
          .then((beer) => beer)
          // new User(users.pop()) // create a user model out of the plain database response
      // .catch((err) => {
      //   // sanitize known errors
      //   if (err.message.match("duplicate key value"))
      //     throw new Error("That username already exists");

      //   // throw unknown errors
      //   throw err;
      // })
    })
  },

  removeBeer(idOrName) {
    if (!isNaN(idOrName)) {
      return knex('beers')
    .where({ 'id': idOrName })
    .del()
    } 
    return knex('beers')
    .where({ 'name': idOrName })
    .del()
  },

  editBeer(params) {
    const { name, description, alcohol} = params
    return knex('beers')
    .where({'name': name})
    .update('description', description)
    .update('alcohol', alcohol)
  }
  // removeBeerByName(name) {
  //   // const id  = params
  //   return knex('beers')
  //   .where({ 'name': name })
  //   .del()
  // }
}