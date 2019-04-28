// const inputName = document.getElementById("input-name")
// const inputDescription = document.getElementById("input-description")
// const inputAlcohol = document.getElementById("input-alcohol")
const editName = document.getElementById("edit-name")
const editDescription = document.getElementById("edit-description")
const editAlcohol = document.getElementById("edit-alcohol")
// const inputForm = document.getElementById("input-form")
// const submitBtn = document.getElementById("input-btn")
const deleteForm = document.getElementById("delete")


function getValue() {
  console.log(deleteForm.value)
  const beerName = deleteForm.value
  const xhr = new XMLHttpRequest
  xhr.open("delete", `http://localhost:3000/api/beers/${beerName}`)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhr.send(`id=${beerName}`)
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
}




