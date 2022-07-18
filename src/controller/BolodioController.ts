import { Request, Response } from "express";
import { BolodioBusiness } from "../business/BolodioBusiness";
import { JogoInputDTO } from "../model/Bolodio";

export class BolodioController {
  constructor(private bolodioBusiness: BolodioBusiness) {}

  async createBolodioController(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const { adversario, dia } = req.body;

      const jogo: JogoInputDTO = {
        adversario,
        dia,
        token,
      };
      await this.bolodioBusiness.createBolodioBusiness(jogo);

      res.status(201).send({
        message: `Bolódio contra ${adversario} no dia ${dia} criado com sucesso!`,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
