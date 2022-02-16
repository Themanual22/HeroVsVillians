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
	const heroList = document.getElementById('hero-list')
	heroArray.forEach(hero => {
		
		const heroLi = document.createElement('li')
		heroLi.textContent = hero.name
		
		const heroImg = document.createElement('img')
		heroImg.setAttribute("src",hero.images.xs)
		heroImg.setAttribute("id", hero.name)

		heroLi.append(heroImg)
		heroList.append(heroLi)

		heroLi.addEventListener("click", function(){
			loadHero(hero)
		})
		
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
	console.log(villainArray)
	const villainList = document.getElementById('villain-list')
	villainArray.forEach(villain => {
		
		const villainLi = document.createElement('li')
		villainLi.textContent = villain.name
		
		const villainImg = document.createElement('img')
		villainImg.setAttribute("src",villain.images.xs)
		villainImg.setAttribute("id", villain.name)

		villainLi.append(villainImg)
		villainList.append(villainLi)

		villainLi.addEventListener("click", function(){
			
			loadVillain(villain)
		})
		
	})
}

function loadPage(){
	fetchHeros()
	fetchVillains()
}
loadPage()

});

//basically we want to write 2 functions that grab a random send it to the spaces we decide in the browswer:


	function loadHero(displayHero){
        const heroStats = document.createElement("div")
        heroStats.id = `stats ${"powerstats"}`
        console.log(displayHero.powerstats.intelligence)
       const {intelligence, combat, durability, power, speed, strength} = displayHero.powerstats
        intelligence.append(intelligence)
        

        // const heroStats = displayHero.powerstats
        // const heroStatsId = querySelector(".hero-stats")
        // let (stat in `.heroStats`); {
        //     heroStatsId.innerText = stat[".hero-stats"] ///this is where we are:
        

		const heroImgDisplay = document.querySelector(".hero-image")
		const heroNameDisplay = document.querySelector(".hero-name")
		heroNameDisplay.innerText = displayHero.name
		heroImgDisplay.setAttribute("src", displayHero.images.md)
		heroImgDisplay.setAttribute("id", displayHero.id)
    }
    function loadVillain(displayVillain){
		console.log(displayVillain)

		//const villainDisplayId = document.getElementById("villain-display")
		const villainImgDisplay = document.querySelector(".villain-image")
		const villainNameDisplay = document.querySelector(".villain-name")
		villainNameDisplay.innerText = displayVillain.name
		villainImgDisplay.setAttribute("src", displayVillain.images.md)
		villainImgDisplay.setAttribute("id", displayVillain.id)
		
    }

    function Likebutton(){
        
    

	/*const heroSearchId = document.getElementById('hero-search')

	heroSearchId.addEventListener("submit",function(event){
		event.preventDefault()
		heroSearch()
	})
	function heroSearch(){
		const heroSearchName = document.getElementById("hero-search").value 
		console.log(heroSearchName)


		fetch(`https://superhero-search.p.rapidapi.com/api/?hero=${heroSearchName}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "superhero-search.p.rapidapi.com",
			"x-rapidapi-key": "3fe5a2eed0msh72c15333815d476p14b3c3jsn112bff9aa40a"
		}
		})
		.then(response => response.json())
		.then(data => console.log(data))

	}
	*/
}
    

