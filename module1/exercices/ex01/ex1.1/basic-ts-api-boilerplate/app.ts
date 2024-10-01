import express, { RequestHandler } from "express";

import filmsRouter from "./routes/films";

const app = express();

let compteur = 0;

const CompteurdeGet: RequestHandler = (_req, _res, next) => {

  if (_req.method === "GET") {
    compteur++;
    console.log(`Nombre de requêtes: ${compteur}`);
  }
  next();
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/films", filmsRouter);
app.use(CompteurdeGet);


export default app;
