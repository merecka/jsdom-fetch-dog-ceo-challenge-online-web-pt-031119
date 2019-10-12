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
		new_breed.onclick = function(){changeColor}
		function changeColor() {
			debugger
			new_breed.style.color = "#0000ff"
	}
})
}


document.addEventListener('DOMContentLoaded', function() {
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
  	breed_keys = Object.keys(json["message"])
	addBreeds(breed_keys)
	})
})


	
