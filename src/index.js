console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"


function addImages(json) {
	const image_container = document.querySelector('#dog-image-container')
	json["message"].forEach(img => {
		const new_img = document.createElement('img')		
		new_img.src = img
		image_container.appendChild(new_img)

	})
}

function addBreeds(breeds) {
	const breed_list = document.querySelector('#dog-breeds')
	breeds.forEach(breed => {
		const new_breed = document.createElement('li')		
		new_breed.innerText = breed
		breed_list.appendChild(new_breed)

		new_breed.addEventListener("click", function(e){
		console.log(e.target)
		e.target.style.color = "#0000ff"

		// This is another way to do it with arrow functions
		// new_breed.onclick = (e) => { console.log(e)
		// e.target.style.color = "#0000ff" }
		})
	})
}


document.addEventListener('DOMContentLoaded', function() {
  const drop_down = document.getElementById('breed-dropdown')
  let letter = drop_down.options[drop_down.selectedIndex].value
  fetch(imgUrl)
  .then(function(response) {
	return response.json()
	})
  .then(function(json) {
	addImages(json)
	})

  fetch(breedUrl)
  .then(function(response) {
	return response.json()
	})
  .then(function(json) {
  	let breed_keys = Object.keys(json["message"])
	addBreeds(breed_keys)
	})
})

// Filters the breed list based on selected letter from drop down box
document.addEventListener('input', function(event){
	const breed_list = document.querySelector('#dog-breeds')
	if (event.target.id !== 'breed-dropdown') return;
	let letter = event.target.value
	fetch(breedUrl)
	  .then(function(response) {
		return response.json()
		})
	  .then(function(json) {
	  	let breed_keys = Object.keys(json["message"])
		  	if (letter) {
		  		breed_list.innerHTML = ""
		  		let breeds = breed_keys.filter(breed => breed.startsWith(letter))
		  		addBreeds(breeds)
		  	} else {
		  		addBreeds(breed_keys)
		  	}
		})
}, false)


	
