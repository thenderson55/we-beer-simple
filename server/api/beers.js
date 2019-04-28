const express = require('express')
const queries = require('../db/queries')

const router  = express.Router()
router.use(express.json());
router.use(express.urlencoded()) 



router.get("/", (req, res) => {
  queries.getAll().then((beers) => {
    res.json(beers)
  })
})
  
router.get('/:idOrName', (req, res) => {
  queries.getOne(req.params.idOrName).then((beer) => {
    res.json(beer[0])
  })
})

router.post("/", (req, res) => {
  queries.addBeer(req.body)
  .then(() => {
    // res.json({response: "success"})
    res.status(204).send()
    // res.json(beer)
  })
})


router.delete('/:id', (req, res) => {
  queries.removeBeer(req.params.id).then(() => 
  res.json({response: "success"}))
})

router.post("/:name", (req, res) => {
  queries.editBeer(req.body).then(() =>{
    res.json({response: "success"})
  })
})

// router.delete('/:name', (req, res) => {
//   console.log(req.params.name)
//   console.log(req.body)
//   queries.removeBeerByName(req.params.name).then(() => 
//   res.json({response: "success"}))

//   // res.send(req.query)
//   // queries.removeBeer(req.params)
// })


module.exports = router