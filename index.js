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
	//console.log(heroArray)
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
    

<<<<<<< HEAD
    console.clear();
const canvas = document.createElement('canvas');
document.body.append(canvas);
canvas.style.display = 'block';
canvas.style.width = '100vw';
canvas.style.height = '100vh';

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const gl = canvas.getContext('webgl2');
if (!gl) {
    alert('require webgl 2.0, bye')
}

const vss = `#version 300 es
in vec2 p;
void main() {
  gl_Position = vec4(p, 0.0, 1.0);
}
`;

const fss = `#version 300 es
precision mediump float;
out vec4 o;
uniform vec4 c;
void main() {
  o = c;
}
`;


// Create shader program
// # should query both shader logs and program logs
// #  only if program link's status is false.
// 
// Here's the antipattern .. keep for ref
//

const vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vss);
gl.compileShader(vs);
if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(vs));
    throw 1;
}

const fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fss);
gl.compileShader(fs);
if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(fs));
    throw 2;
}

const prg = gl.createProgram();
gl.attachShader(prg, vs);
gl.attachShader(prg, fs);
gl.linkProgram(prg);
if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(prg));
    throw 3;
}

gl.detachShader(prg, vs);
gl.deleteShader(vs);
gl.detachShader(prg, fs);
gl.deleteShader(fs);

// ---- End of antipattern ----

const $p = gl.getAttribLocation(prg, 'p');
const $c = gl.getUniformLocation(prg, 'c');

const va = gl.createVertexArray();
gl.bindVertexArray(va);

const N = 300; // n triangles

let ps;
{    
    ps = new Float32Array(2 + N * 2 * 2);
    ps[0] = 0; // clip space center
    ps[1] = 0;
    let j = 2;
    for (let i = 0; i < N; ++i) {
        ps[j++] = Math.random() * 2 - 1; //x 
        ps[j++] = Math.random() * 2 - 1; //y
        ps[j++] = Math.random() * 2 - 1; //x 
        ps[j++] = Math.random() * 2 - 1; //y
    }
}

const buf = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buf);
gl.bufferData(gl.ARRAY_BUFFER, ps, gl.DYNAMIC_DRAW);
gl.enableVertexAttribArray($p);
gl.vertexAttribPointer(
    $p,
    2, gl.FLOAT, // two 32b-float (8bytes)
    false,
    0, // skip n byte to fetch next
    0  // skip n byte to fetch first
);

let idxs; 
{ 
    idxs = new Uint16Array(3 * N);
    let j = 0;
    for (let i = 0; i < N; ++i) {
        idxs[j++] = 0;
        idxs[j++] = 1 + i * 2;
        idxs[j++] = 2 + i * 2;
    }
}

const ibuf = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idxs, gl.STATIC_DRAW);

gl.bindVertexArray(null);

//----- render

gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
gl.clearColor(0.1, 0.1, 0.1, 1);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.BLEND);
gl.disable(gl.CULL_FACE);
gl.useProgram(prg);
gl.bindVertexArray(va);



function f() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform4fv($c, [0.2, 0.2, 0.2, 0.02]);
    gl.drawElements(
        gl.TRIANGLES,
        idxs.length, // n indices
        gl.UNSIGNED_SHORT, // ui16
        0 // skip n bytes to fetch first
    );
}
f();

// ---
gl.bindBuffer(gl.ARRAY_BUFFER, buf);
document.body.onmousemove = (e) => {
    ps[0] = e.clientX / window.innerWidth * 2 - 1;
    ps[1] = -1 * (e.clientY / window.innerHeight * 2 - 1);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, ps.slice(0, 2)); // that's why DYNAMIC_DRAW
    f();
} 
=======
>>>>>>> f821677dd877e05782035757d29a21825a785442
