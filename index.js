fetch("https://superhero-search.p.rapidapi.com/api/heroes")
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});