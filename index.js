document.addEventListener("DOMContentLoaded", function() {

function fetchHeros(){
fetch("https://superhero-search.p.rapidapi.com/api/heroes",{ 
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "superhero-search.p.rapidapi.com",
		"x-rapidapi-key": "3fe5a2eed0msh72c15333815d476p14b3c3jsn112bff9aa40a"
	}
})
.then(response => response.json())
.then(data => renderCharacters(data))
}

function renderCharacters(charArray){
	console.log(charArray)
	const heroList = document.getElementById('hero-list')
	charArray.forEach(hero => {
		
		const heroLi = document.createElement('li')
		heroLi.textContent = hero.name
		
		const heroImg = document.createElement('img')
		heroImg.setAttribute("src",hero.images.xs)
		heroImg.setAttribute("id", hero.name)

		heroLi.append(heroImg)
		
		heroList.append(heroLi)
		
		console.log(heroLi)
	})
}

fetchHeros()
});






