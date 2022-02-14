fetchHero()
function fetchHero(){
fetch('https://biriyani.anoram.com/get')
.then (res => res.json())
.then (data => console.log(data))

}