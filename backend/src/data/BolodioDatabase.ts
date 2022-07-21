import { BolodioRepository } from "../business/BolodioRepository";
import { BaseError } from "../Errors/BaseError";
import { Jogo, Jogos } from "../model/Bolodio";
import { BaseDatabase } from "./BaseDatabase";

export class BolodioDatabase extends BaseDatabase implements BolodioRepository {
  private static TABLE_NAME = "bolodio";

  public async createBolodio(bolodio: Jogo): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id: bolodio.id,
          adversario: bolodio.adversario,
          dia: bolodio.dia,
          criador_bolodio: bolodio.criador,
          campeonato: bolodio.campeonato,
          palpite_liberado: bolodio.liberado,
          mando: bolodio.mando,
        })
        .into(BolodioDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBolodio(): Promise<Jogo[]> {
    try {
      const jogos = await this.getConnection()
        .select()
        .into(BolodioDatabase.TABLE_NAME);
      return [...jogos];
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}
