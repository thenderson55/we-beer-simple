
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
getBeers()

