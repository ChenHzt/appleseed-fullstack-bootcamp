const fs = require('fs')
const chalk = require('chalk')
const uniqid = require('uniqid');
const path= require('path');

const loadMovies = () => {
    try {
        
        const dataBuffer = fs.readFileSync(path.join(__dirname,'db/db.json'));

        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        
        return []
    }
}

const saveMovies = (movies) => {
    const dataJSON = JSON.stringify(movies)
    fs.writeFileSync(path.join(__dirname,'db/db.json'), dataJSON)
}

const createMovie = ({title,rating,genre,length}) => {
    const movies = loadMovies()
    const id= uniqid();
    const newMovie={
        id,
        title,
        rating,
        genre,
        length
    }
    movies.push(newMovie);
    saveMovies(movies)
    console.log(chalk.green.inverse('New movie added with id:'+id));
    return newMovie;
}

const listMovies = () => {
    const movies = loadMovies()

    return movies;
}

const findMovie = (id) => {
    const movies = loadMovies()

    const movie = movies.find((movie) => movie.id === id)

    if (movie) {
        return movie;

    } else {
        throw new Error('movie not found');
    }
}

const updateMovie = ({id,title,rating,genre,length}) => {
    const movies = loadMovies()

    const movie = movies.find((movie) => movie.id === id)
    // let ret=null;
    if (movie) {
        const titleNew = title?title:movie.title;
        const ratingNew =rating?rating:movie.rating;
        const genreNew = genre?genre:movie.genre;
        const lengthNew = length?length:movie.length;
        const returned = Object.assign(movie,{title:titleNew,rating:ratingNew,genre:genreNew,length:lengthNew})
        saveMovies(movies);
        return (returned);
    } else {
        throw new Error('movie not found');
    }
}


const deleteMovie = (id) => {


    const movies = loadMovies()
    const moviesToKeep = movies.filter((movie) => movie.id !== id)
    const movieToDel = findMovie(id);
    if (movies.length > moviesToKeep.length) {
        console.log(chalk.green.inverse('movie removed!'))
        saveMovies(moviesToKeep)
        return movieToDel;
    } else {
        throw new Error('movie not found');
    }    
}

module.exports = {
    createMovie,
    listMovies,
    findMovie,
    updateMovie,
    deleteMovie
}