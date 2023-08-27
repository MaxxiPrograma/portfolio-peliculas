let pagina = 1;


btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPopulares();
	}
});

const btnBuscar = document.getElementById('btnBuscar');
const contenedor = document.getElementById('contenedor');

btnBuscar.addEventListener('click', async () => {
  try {
    const busqueda = document.getElementById('buscador').value;
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&query=${busqueda}`
    );

    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      
      let peliculas = '';
      datos.results.forEach(pelicula => {
        peliculas += `
          <div class="pelicula" data-id="${pelicula.id}">
            <div class="imagen-container">
              <img class="poster" src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}" alt="Poster de ${pelicula.title}">
              <div class="resumen">
                <p>${pelicula.overview}</p>
              </div>
            </div>
            <h3 class="titulo">${pelicula.title}</h3>
          </div>
        `;
      });
      contenedor.innerHTML = peliculas;
      
      
      const imagenes = document.querySelectorAll('.poster');
      imagenes.forEach(imagen => {
        imagen.addEventListener('mouseover', () => {
          imagen.parentNode.querySelector('.resumen').style.opacity = 1;
        });
        imagen.addEventListener('mouseout', () => {
          imagen.parentNode.querySelector('.resumen').style.opacity = 0;
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
});
const btnPopulares = document.getElementById('btnPopulares');
btnPopulares.addEventListener('click', obtenerPopulares);


async function obtenerPopulares() {
  try {
    const respuesta = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=1'
    );
    btnSiguiente.addEventListener('click', () => {
      
      });
    
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      
      let peliculas = '';
      datos.results.forEach(pelicula => {
        peliculas += `
          <div class="pelicula" data-id="${pelicula.id}">
            <div class="imagen-container">
              <img class="poster" src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}" alt="Poster de ${pelicula.title}">
              <div class="resumen">
                <p>${pelicula.overview}</p>
              </div>
            </div>
            <h3 class="titulo">${pelicula.title}</h3>
          </div>
        `;
      
      });
      contenedor.innerHTML = peliculas;
      
      // Loop through every poster image and add mouseover/mouseout events
      const imagenes = document.querySelectorAll('.poster');
      imagenes.forEach(imagen => {
        imagen.addEventListener('mouseover', () => {
          imagen.parentNode.querySelector('.resumen').style.opacity = 1;
        });
        imagen.addEventListener('mouseout', () => {
          imagen.parentNode.querySelector('.resumen').style.opacity = 0;
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}


const btnTop10 = document.getElementById('btnTop10');
btnTop10.addEventListener('click', async () => {
  try {
    const respuesta = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=1'
    );

    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = '';
      datos.results.slice(0, 12).forEach(pelicula => { 
        peliculas += `
          <div class="pelicula" data-id="${pelicula.id}">
            <div class="imagen-container">
              <img class="poster" src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}" alt="Poster de ${pelicula.title}">
              <div class="resumen">
              <p>${pelicula.overview}</p>
              </div>
            </div>
            <h3 class="titulo">${pelicula.title}</h3>
          </div>
        `;
      });
      contenedor.innerHTML = peliculas;
      
      // Loop through every poster image and add mouseover/mouseout events
      const imagenes = document.querySelectorAll('.poster');
      imagenes.forEach(imagen => {
        imagen.addEventListener('mouseover', () => {
          imagen.parentNode.querySelector('.resumen').style.opacity = 1;
        });
        imagen.addEventListener('mouseout', () => {
          imagen.parentNode.querySelector('.resumen').style.opacity = 0;
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

