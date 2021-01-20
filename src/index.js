
// variables

let tableBody = document.querySelector('#table-body')
let table = document.querySelector('table.margin')
let form = document.querySelector('#dog-form')



// Render and logic functions

function renderDogObj(dogObj) {
   // add each dog obj as a table row into html
   tableBody.innerHTML += 
      `<tr>
         <td id="name">${dogObj.name}</td> 
         <td id="breed">${dogObj.breed}</td> 
         <td id="sex">${dogObj.sex}</td> 
         <td><button id="edit-btn">Edit</button></td>
      </tr>`
}


function getDogObj(allDogs) {
   allDogs.forEach(dogObj => {
      // pass dog obj to rendering function
      renderDogObj(dogObj)
   })
}




// NETWORK REQUESTS

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

function getAllDogs() {
   fetch("http://localhost:3000/dogs")
   .then(response => response.json())
   .then(allDogs => {
      // pass data object to another function
      getDogObj(allDogs)
   })
}

getAllDogs()


function updateDogInfo(newDogInfo) {
   fetch
}




// EVENT LISTENERS

function handleEditBtn(name, breed, sex) {
   // assign form field values equal to dog obj values
   form.name.value = name
   form.breed.value = breed
   form.sex.value = sex
   console.log('Edit away')
}


table.addEventListener('click', function(event){
   
   if (event.target.matches('#edit-btn')) {
   
      // capture table row values
      const editBtn = event.target
      const tableRow = editBtn.closest('tr')
      const name = tableRow.querySelector('#name').innerText
      const breed = tableRow.querySelector('#breed').innerText
      const sex = tableRow.querySelector('#sex').innerText
      
      // enter them into form fields
      handleEditBtn(name, breed, sex)
   }
})

form.addEventListener('submit', function(event) {
   event.preventDefault()

   console.log(event.target)
   // capture form input values
   let name = event.target.name.value
   let breed = event.target.breed.value
   let sex = event.target.sex.value

   // inser input values into object to be passed to patch request
   let newDogInfo = {
      name: name,
      breed: breed,
      sex: sex
   }

   // send patch request
   updateDogInfo(newDogInfo, id)
})