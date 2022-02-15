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
.then(data => renderHeros(data))
}

function renderHeros(heroArray){
	//console.log(charArray)
	const heroList = document.getElementById('hero-list')
	heroArray.forEach(hero => {
		
		const heroLi = document.createElement('li')
		heroLi.textContent = hero.name
		
		const heroImg = document.createElement('img')
		heroImg.setAttribute("src",hero.images.xs)
		heroImg.setAttribute("id", hero.name)

		heroLi.append(heroImg)
		
		heroList.append(heroLi)
		
	})
}



function fetchVillains(){
fetch("https://superhero-search.p.rapidapi.com/api/villains", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "superhero-search.p.rapidapi.com",
		"x-rapidapi-key": "3fe5a2eed0msh72c15333815d476p14b3c3jsn112bff9aa40a"
	}
})
.then(response => response.json())
.then(data => renderVillains(data))
}

function renderVillains(villainArray){
	//console.log(charArray)
	const villainList = document.getElementById('villain-list')
	villainArray.forEach(villain => {
		
		const villainLi = document.createElement('li')
		villainLi.textContent = villain.name
		
		const villainImg = document.createElement('img')
		villainImg.setAttribute("src",villain.images.xs)
		villainImg.setAttribute("id", villain.name)

		villainLi.append(villainImg)
		
		villainList.append(villainLi)
		
	})
}

function loadPage(){
	fetchHeros()
	fetchVillains()
}
loadPage()

});

//basically we want to write 2 functions that grab a random send it to the spaces we decide in the browswer:
    function loadHero(){

    }
    function loadvillian(){

    }

    function Likebutton(){
        
    }
