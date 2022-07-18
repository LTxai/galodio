import { BolodioRepository } from "../business/BolodioRepository";
import { Jogo } from "../model/Bolodio";
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
        })
        .into(BolodioDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
