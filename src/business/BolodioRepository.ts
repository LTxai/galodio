import { Jogo, Jogos } from "../model/Bolodio";

export interface BolodioRepository {
  createBolodio(bolodio: Jogo): Promise<void>;
  getBolodio(token: string): Promise<Jogos>;
}
