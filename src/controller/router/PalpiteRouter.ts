import express from "express";
import { PalpitesBusiness } from "../../business/PalpitesBusiness";
import { PalpiteDatabase } from "../../data/PalpiteDatabase";
import { PalpiteController } from "../PalpiteController";

export const palpiteRouter = express.Router();

const palpiteDatabase = new PalpiteDatabase();
const palpiteBusiness = new PalpitesBusiness(palpiteDatabase);
const palpiteController = new PalpiteController(palpiteBusiness);

palpiteRouter.post("/", (req, res) => palpiteController.criaPalpite(req, res));
palpiteRouter.get("/:jogoId", (req, res) =>
  palpiteController.pegarPalpites(req, res)
);
