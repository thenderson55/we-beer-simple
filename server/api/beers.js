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


router.post("/", (req, res) => {
  // console.log(req)
  console.log(req.body)
  res.send(req.body)
})


module.exports = router