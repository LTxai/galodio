import express from "express";
import { BolodioBusiness } from "../../business/BolodioBusiness";
import { BolodioDatabase } from "../../data/BolodioDatabase";
import { BolodioController } from "../BolodioController";

export const bolodioRouter = express.Router();

const bolodioDatabase = new BolodioDatabase();
const bolodioBusiness = new BolodioBusiness(bolodioDatabase);
const bolodioController = new BolodioController(bolodioBusiness);

bolodioRouter.post("/criar-jogo", (req, res) =>
  bolodioController.createBolodioController(req, res)
);
