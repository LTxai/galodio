import { Request, Response } from "express";
import { BolodioBusiness } from "../business/BolodioBusiness";
import { invalidGuess } from "../Errors/InvalidGuess";
import { JogoInputDTO } from "../model/Bolodio";

export class BolodioController {
  constructor(private bolodioBusiness: BolodioBusiness) {}

  async createBolodioController(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const { adversario, dia, campeonato, mando, liberado } = req.body;

      const jogo: JogoInputDTO = {
        adversario,
        dia,
        campeonato,
        liberado,
        mando,
        token,
      };
      await this.bolodioBusiness.createBolodioBusiness(jogo);

      res.status(201).send({
        message: `Bolódio contra ${adversario} no dia ${dia} criado com sucesso!`,
        token,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getBolodio(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const jogo = await this.bolodioBusiness.getBolodio(token);
      if (!jogo) {
        throw new invalidGuess();
      }
      res.status(200).send(jogo)
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  }
}
