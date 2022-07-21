import { BaseError } from "../Errors/BaseError";
import { invalidAuthenticatorData, invalidToken } from "../Errors/InvalidData";
import { invalidGuess } from "../Errors/InvalidGuess";
import { Jogo, JogoInputDTO } from "../model/Bolodio";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGen";
import { BolodioRepository } from "./BolodioRepository";

export class BolodioBusiness {
  constructor(private bolodioDatabase: BolodioRepository) {}
  async createBolodioBusiness(bolodio: JogoInputDTO) {
    try {
      const { adversario, dia, campeonato, liberado, mando, token } = bolodio;
      if (!token) {
        throw new invalidToken();
      }

      const authenticatorData = new Authenticator().getData(token);

      if (!authenticatorData.id) {
        throw new invalidAuthenticatorData();
      }
      if (authenticatorData.role !== "ADMIN") {
        throw new Error("Apenas Admins podem criar o bolódio");
      }

      const id = new IdGenerator().generateId();

      const jogo: Jogo = {
        id,
        adversario,
        dia,
        campeonato,
        liberado,
        mando,
        criador: authenticatorData.id,
      };

      await this.bolodioDatabase.createBolodio(jogo);
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }

  async getBolodio(token: string) {
    try {
      if (!token) {
        throw new invalidToken();
      }
      const authenticatorData = new Authenticator().getData(token);

      if (!authenticatorData.id) {
        throw new invalidAuthenticatorData();
      }

      const jogo = await this.bolodioDatabase.getBolodio(token);
      if (!jogo) {
        throw new invalidGuess();
      }
      return jogo;
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}
