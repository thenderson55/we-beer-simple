
console.log('yay')

const getBeers = () => {
  const beersApi = fetch("http://localhost:3000/api/beers")
  return beersApi
    .then((response) => response.json())
    .then((data) => {
      return data.map(beer => {
        console.log(beer.name) 
      })
      return console.log(data[5])
    })
    
}
// getBeers()

const findABeer = (num) => {
  const beerApi = fetch(`http://localhost:3000/api/beers/${num}`)
  return beerApi
    .then((response) => response.json())
    .then((data) => {
      return console.log(data[0].name)
    })
}

// findABeer(4)



