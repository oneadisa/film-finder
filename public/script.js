const tmdbKey = "883766d4c142119ec956926af22fdcb8";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
    const genreRequestEndpoint = "/genre/movie/list";

    const requestParams = `?api_key=${tmdbKey}`;

    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch, { method: "GET" });
        if (response.ok) {
            const jsonResponse = response.json();
            console.log(jsonResponse);
            const genres = jsonResponse.genres;
            console.log(genres);
            return genres;
        }
    } catch (error) {
        console.log(error);
    }
};

const getMovies = () => {
    const selectedGenre = getSelectedGenre();
    const discoverMovieEndpoint = '/discover/movie';
};

const getMovieInfo = () => { };

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
    const movieInfo = document.getElementById("movieInfo");
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    }
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;

getGenres();