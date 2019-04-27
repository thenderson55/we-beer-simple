const express = require('express')

const router  = express.Router()

const queries = require('../db/queries')

router.get("/", (req, res) => {
  queries.getAll().then((beers) => {
    res.json(beers)
  })
  // res.json({
  //   yolo: "I'm working!"
  // })
})

router.get('/:id', (req, res) => {
  queries.getOne(req.params.id).then((beer) => {
    res.json(beer)
  })
})


module.exports = router