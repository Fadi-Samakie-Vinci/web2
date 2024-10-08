import { Router } from "express";
import { Film,NewFilm} from "../types";

const router = Router();
const films: Film[] = [
  {
    id: 1,
    title: "Le Roi Lion",
    director:
      "Roger Allers",
    duration : 150,
  },
    {
        id: 2,
        title: "Le Seigneur des Anneaux",
        director:
        "Peter Jackson",
        duration : 180,
    },
    {
        id: 3,
        title: "Pulp Fiction",
        director:
        "Quentin Tarantino",
        duration : 120,
    },
    {
        id: 4,
        title: "La La Land",
        director:
        "Damien Chazelle",
        duration : 130, 
    },
  
];

router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    return res.json(films);
  }
  const minimumDuration = Number(req.query["minimum-duration"]);
  const filteredFilms = films.filter((film) => {
    return film.duration >= minimumDuration;
  });
  return res.json(filteredFilms);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});
router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration } = body as NewFilm;

  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
  };

  films.push(newFilm);
  return res.json(newFilm);
});



export default router;
