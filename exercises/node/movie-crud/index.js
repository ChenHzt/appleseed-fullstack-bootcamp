const express = require("express");
const app = express();
const { listMovies,findMovie, createMovie,updateMovie,deleteMovie} = require("./utils");

app.use(express.json());

app.get("/api/movies", (req, res) => {

    const movies = listMovies();
    res.status(200).json(movies);
});

app.post("/api/movies", (req, res) => {
    console.log(req.body);
    try {
        const create = createMovie(req.body);
        res.status(201).json(create);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});


app.get("/api/movies/:id/", (req, res) => {
    const { id } = req.params;
    try {
        const movie = findMovie(id);
        res.status(200).json(movie);
    }
    catch (e) {
        res.status(400).send({ error: e.message });
    }
});

app.put("/api/movies/:id/", (req, res) => {
    const { id } = req.params;
    try {
        const movie = updateMovie({...req.body,id});
        res.status(200).json(movie);
    }
    catch (e) {
        res.status(400).send({ error: e.message });
    }
});

app.delete("/api/movies/:id", (req, res) => {
    const { id } = req.params;
    try {
        console.log('dsdsdsdsdsds');
        const movie = deleteMovie(id);
        res.status(200).send({message:'movie has been deleted'});
    }
    catch (e) {
        res.status(400).send({ error: e.message });
    }
  });


const PORT = 3000;
app.listen(PORT, () => {
    console.log("listening..");
});
