console.log('hello')

const inputName = document.getElementById("input-name")
const inputDescription = document.getElementById("input-description")
const inputAlcohol = document.getElementById("input-alcohol")
const inputForm = document.getElementById("input-form")
const submitBtn = document.getElementById("input-btn")
const deleteForm = document.getElementById("delete")
// console.log(inputName)

// $(document).ready(function() {
//   $('.delete-btn').on('click', function(e){
    
//   })
// })

function getValue() {
  console.log(deleteForm.value)
  const beerName = deleteForm.value
  const xhr = new XMLHttpRequest
  xhr.open("delete", `http://localhost:3000/api/beers/${beerName}`)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhr.send(`id=${beerName}`)
//   $http({
//     method: "POST",
//     url: `http://localhost:3000/api/users/${
//       beerName
//     }`,
//     data: { username: "bob"},
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => {
//     console.log(response)
//     // $scope.currentMessages = response.data;
//     // $("#messageArea")[0].value = "";
//   });
}


// deleteForm.addEventListener("submit", (e) => {
//   e.preventDefault()
//   console.log(input.value)
// })
// inputForm.addEventListener("submit", function(e)  {
//   e.preventDefault()
//   console.log('clcked')
//   console.log(input.value)
// })
// document.addEventListener("click", function()  {
//   // e.preventDefault()
//   alert('clicked')
//   console.log('clcked')
//   // console.log(input.value)
// })