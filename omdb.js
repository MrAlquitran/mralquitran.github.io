let paginanueva = 2;
window.onload = () =>{
    document.getElementById("btn").addEventListener("click", peticionAJAXmoderna);
    document.getElementById("cargarMas").addEventListener("click", cargarMas);
}
function peticionAJAXmoderna(){
    let peliculaBuscar = document.getElementById("buscar").value;
  fetch("http://www.omdbapi.com/?apikey=baa35bb8&s="+peliculaBuscar,{method: "GET"})
  .then((res) => res.json())
  .then((datosRecibidos)=>{
    let milista = document.getElementById("lista");
    milista.innerHTML = "";
    
    for (pelicula of datosRecibidos.Search) {
        let li = document.createElement("li");
        li.innerHTML = `${pelicula.Title} ${pelicula.Year}`;

        let imagen = document.createElement("img");
        imagen.src = pelicula.Poster;
        li.appendChild(imagen);

        milista.appendChild(li);
    }
    console.log(datosRecibidos)
  }).catch((err)=> console.error("error",err));
}

function cargarMas(){
    paginanueva++;
    let peliculaBuscar = document.getElementById("buscar").value;
    fetch("http://www.omdbapi.com/?apikey=baa35bb8&s="+peliculaBuscar+"&page="+paginanueva,{method: "GET"})
    .then((res) => res.json())
    .then((datosRecibidos)=>{
      let milista = document.getElementById("lista");
      milista.innerHTML = "";
    
      for (pelicula of datosRecibidos.Search){
      let li = document.createElement("li");
      li.innerHTML = `${pelicula.Title} ${pelicula.Year}`;

      let imagen = document.createElement("img");
      imagen.src = pelicula.Poster;
      li.appendChild(imagen);

      milista.appendChild(li);
      
    }
    console.log(datosRecibidos)
  }).catch((err)=> console.error("error",err));
}