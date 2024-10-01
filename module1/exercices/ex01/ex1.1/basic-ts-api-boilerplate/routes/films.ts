import { Router } from "express";
import { Film} from "../types";

const drinks: Film[] = [
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


const router = Router();

router.get("/", (_req, res) => {
  return res.json(drinks);
});

export default router;
