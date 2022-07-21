import { Palpite } from "../model/Palpites";

export interface PalpiteRepository {
  criarPalpite(palpite: Palpite): Promise<void>;
  pegarPalpitesPorIdDeJogo(jogoId: string): Promise<Palpite>;
}
