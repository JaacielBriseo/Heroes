let enviarHeroe= document.getElementById('enviarHeroe')
let heroes = []

enviarHeroe.addEventListener("submit", function (event) {
  event.preventDefault();
  guardarHeroe(recibirHeroe.value)
  peticion();
});

function guardarHeroe (heroe){
  heroes.push({
    heroe
  }) 
  console.log(heroes)
}

const peticion = async () =>{
  const respuesta = await axios.get(`https://www.superheroapi.com/api.php/10227843723547022/search/${recibirHeroe.value}`)
  console.log(respuesta.data)
  heroes.forEach(function(){
    imprimirHeroe.innerHTML = ''
    imprimirHeroe.innerHTML = `
    <h1 id="nombreHeroe">${(respuesta.data.results[0].name)}</h1>
    `
    imagenHeroe.innerHTML = `
    <img class="img-fluid" src=${(respuesta.data.results[0].image.url)}>
  `
  biografiaHeroe.innerHTML =`
  <div id=bioHeroe
  <p>Fullname:${(respuesta.data.results[0].biography['full-name'])}</p>
  <p>Race:${(respuesta.data.results[0].appearance.race)}</p>
  <p>Birth place:${(respuesta.data.results[0].biography['place-of-birth'])}</p> 
  <p>Occupation:${(respuesta.data.results[0].work.occupation)}</p>
  <p>Connections with:${(respuesta.data.results[0].connections['group-affiliation'])}</p>
  <p>Height:${(respuesta.data.results[0].appearance.height)}</p> 
  <p>Weight:${(respuesta.data.results[0].appearance.weight)}</p> 

  `
  })

}

