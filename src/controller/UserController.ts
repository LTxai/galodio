import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BaseError } from "../Errors/BaseError";
import { SignupInputDTO } from "../model/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  async signupController(req: Request, res: Response) {
    try {

      const signup: SignupInputDTO = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        telefone: req.body.telefone,
        apelido: req.body.apelido,
        senha: req.body.senha,
        role: req.body.role,
      };

      const token = await this.userBusiness.signupBusiness(signup);

      res.status(201).send({
        message: "Conta criada!",
        token,
      });
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }

    await BaseDatabase.destroyConnection();
  }
}
