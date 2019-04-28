const express = require('express')
const queries = require('../db/queries')

// const app = express()
const router  = express.Router()
router.use(express.json());
router.use(express.urlencoded()) 



router.get("/", (req, res) => {
  queries.getAll().then((beers) => {
    res.json(beers)
  })
})
  
router.get('/:id', (req, res) => {
  queries.getOne(req.params.id).then((beer) => {
    res.json(beer)
  })
})
router.get('/:name', (req, res) => {
  queries.getOne(req.params.id).then((beer) => {
    res.json(beer)
  })
})


router.post("/", (req, res) => {
  // console.log(req)
  // queries.addBeer(req.body).then((beer) => {
  //   res.json(beer)
  // })
  // console.log(req.body)
  // console.log(req.body.description)
  // res.send(req.body)
})


router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  queries.removeBeer(req.params.id).then(() => 
  res.json({response: "success"}))

  // res.send(req.query)
  // queries.removeBeer(req.params)
})


module.exports = router