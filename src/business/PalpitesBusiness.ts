import { BaseError } from "../Errors/BaseError";
import { invalidAuthenticatorData, invalidToken } from "../Errors/InvalidData";
import { invalidGuess, invalidScoreboard } from "../Errors/InvalidGuess";
import { Palpite, PalpiteDTO } from "../model/Palpites";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGen";
import { PalpiteRepository } from "./PalpiteRepository";

const authenticator = new Authenticator();
const idGenerator = new IdGenerator();

export class PalpitesBusiness {
  constructor(private palpitesDatabase: PalpiteRepository) {}

  async criarPalpite(inputPalpite: PalpiteDTO) {
    try {
      const { golsGalo, golsAdversario, token, autorPalpite, jogoId } =
        inputPalpite;

      if (!token) {
        throw new invalidToken();
      }

      if (!golsGalo || !golsGalo) {
        throw new invalidScoreboard();
      }

      if (golsAdversario > golsGalo) {
        throw new invalidGuess();
      }
      const authenticatorData = authenticator.getData(token);
      if (!authenticatorData.id) {
        throw new invalidAuthenticatorData();
      }

      const id = idGenerator.generateId();
      const novoPalpite: Palpite = {
        id,
        golsAdversario,
        golsGalo,
        autorPalpite,
        jogoId,
      };

      await this.palpitesDatabase.criarPalpite(novoPalpite);
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }

  async pegarPalpitesPorIdDeJogo(jogoId: string, token: string) {
    try {
      if (!token) {
        new invalidToken();
      }
      const authenticatorData = new Authenticator().getData(token);

      if (!authenticatorData.id) {
        throw new invalidAuthenticatorData();
      }

      const palpites = await this.palpitesDatabase.pegarPalpitesPorIdDeJogo(
        jogoId
      );
      if (!palpites) {
        throw new invalidScoreboard();
      }
      return palpites;
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}
