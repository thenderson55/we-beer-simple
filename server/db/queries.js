const knex = require('./knex')  // the connection to the database!

module.exports = {
  getAll(){
    return knex('beers')
  },

  getOne(id){
    return knex('beers').where('id', id)
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
  }
}