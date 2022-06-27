// Se crea la clase cine con un constructor
class Cine{
    constructor(pelicula, precio, lugares){
        this.pelicula = pelicula
        this.precio = Number(precio)
        this.lugares = Number(lugares)
    }
}

// crea un array para agregar con las peliculas
const peliculas = [];
// creamos las diferentes variantes de peliculas
peliculas.push(new Cine("Thor", 900, 10));
peliculas.push(new Cine("Lightyear",980, 5));
peliculas.push(new Cine("The Black Phone", 800,20))
peliculas.push(new Cine("Jurassic World",850, 15))


//dom
let divCine = document.getElementById("divCine")
peliculas.forEach(pelis => {
    divCine.innerHTML += `${pelis.pelicula} </br> $${pelis.precio} </br> <button  onclick="aviso()" class="btn">Comprar</button> <br></br>`
});


let boton = document.querySelectorAll(".btn");

function aviso(){
    alert(`Compraste una entrada`)
};

