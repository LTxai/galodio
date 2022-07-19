import { PalpiteRepository } from "../business/PalpiteRepository";
import { Palpite } from "../model/Palpites";
import { BaseDatabase } from "./BaseDatabase";

export class PalpiteDatabase extends BaseDatabase implements PalpiteRepository {
  private static TABLE_NAME = "palpite_bolodio";

  async criarPalpite(palpite: Palpite): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id: palpite.id,
          gols_galo: palpite.golsGalo,
          gols_adv: palpite.golsAdversario,
          autor_palpite: palpite.autorPalpite,
          jogo_id: palpite.jogoId,
        })
        .into(PalpiteDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async pegarPalpitesPorIdDeJogo(jogoId: string): Promise<Palpite> {
    try {
      const [palpites] = await this.getConnection()
        .select(
          "id",
          "gols_galo as golsGalo",
          "gols_adv as golsAdversario",
          "autor_palpite as autorPalpite",
          "jogo_id as jogoId"
        )
        .where({
          jogoId,
        })
        .into(PalpiteDatabase.TABLE_NAME);
      return palpites;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
