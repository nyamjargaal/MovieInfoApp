const searchForm = document.querySelector("form");
const movieContainer = document.querySelector(".movie-container");
const moviePoster = document.querySelector(".movie-poster");
const movieDetails = document.querySelector(".movie-details");

const inputBox = document.querySelector(".inputBox");

const getMovieInfo = async (movie) => {
  const myAPIKey = "f354af57";
  const url = `http://www.omdbapi.com/?apikey=${myAPIKey}&t=${movie}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showMovieData(data)
};

const showMovieData = (data) => {
  movieContainer.innerHTML = ""
  const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } =
    data;
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie-info")
  movieElement.innerHTML = `      

                          <h2>${Title}</h2> 
                          <p><strong>Released Date: </strong>${Released}</p>
                          <p><strong>Rating: </strong>${imdbRating}</p>
                          <p><strong>Cast: </strong>${Actors}</p>
                          <p><strong>Description</strong>${Plot}</p>
                          <p><strong>Duration: </strong>${Runtime}</p>
                          `
                          
                          ;



// Movie genre section
  const movieGenreElement = document.createElement('div')
  movieGenreElement.classList.add('movie-genre')

  Genre.split(",").forEach(element=> {
    const p = document.createElement("p")
    p.innerText = element
    movieGenreElement.appendChild(p)
  })
  movieElement.appendChild(movieGenreElement)




  // Kinonii poster zurag gargaj ireh hesgiin code
  const moviePosterElement = document.createElement('div')
  moviePosterElement.classList.add('movie-poster')
  moviePosterElement.innerHTML = `<img src="${Poster}"/>`
  movieContainer.appendChild(moviePosterElement)
                  
  movieContainer.appendChild(movieElement);
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const movieName = inputBox.value.trim();
  if (movieName !== "") {
    getMovieInfo(movieName);
  }
});
