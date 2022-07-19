import { Request, Response } from "express";
import { PalpitesBusiness } from "../business/PalpitesBusiness";
import { PalpiteDTO } from "../model/Palpites";

export class PalpiteController {
  constructor(private palpiteBusiness: PalpitesBusiness) {}
  async criaPalpite(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const { autorPalpite, golsGalo, golsAdversario, jogo } = req.body;

      const palpite: PalpiteDTO = {
        autorPalpite,
        golsAdversario,
        golsGalo,
        jogo,
        token,
      };

      await this.palpiteBusiness.criarPalpite(palpite);
      res.status(201).send({ message: "Palpite efetuado com sucesso!" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  async pegarPalpites(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const jogo = req.params.jogo;

      const palpites = await this.palpiteBusiness.pegarPalpitesPorIdDeJogo(
        jogo,
        token
      );

      res.status(200).send(palpites);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
