const editName = document.getElementById("edit-name")
const editDescription = document.getElementById("edit-description")
const editAlcohol = document.getElementById("edit-alcohol")
const deleteForm = document.getElementById("delete")

function getValue() {
  console.log(deleteForm.value)
  const beerName = deleteForm.value
  const xhr = new XMLHttpRequest
  xhr.open("delete", `http://localhost:3000/api/beers/${beerName}`)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhr.send(`id=${beerName}`)
}





