
console.log('yay')

const beerList = document.getElementById("list-beers")

const getBeers = () => {
  const beersApi = fetch("http://localhost:3000/api/beers")
  return beersApi
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      data.forEach(beer => {
        const beerInfo = document.createElement('div')
        const lineBreak = document.createElement('br')
        beerInfo.innerText = `${beer.name}, ${beer.description} ${beer.alcohol}`
        beerInfo.classList.add('beer-item')
        beerInfo.append(lineBreak)
        beerList.append(beerInfo)
      })
    })
    
  }

  const refreshBeers = () => {
  while (beerList.firstChild) {
    beerList.removeChild(beerList.firstChild);
  }
  getBeers()
}

function getValues() {
  const name = editName.value
  const description = editDescription.value
  const alcohol = editAlcohol.value
  const url = `http://localhost:3000/api/beers/${name}`
  axios({
    method: 'post',
    url: url,
    data: {
      name: name,
      description: description,
      alcohol: alcohol
    }
  });
  setTimeout(refreshBeers, 100) 
}


const findABeer = (num) => {
  const beerApi = fetch(`http://localhost:3000/api/beers/${num}`)
  return beerApi
    .then((response) => response.json())
    .then((data) => {
      return console.log(data[0].name)
    })
}




