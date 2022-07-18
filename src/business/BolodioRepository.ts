import { Jogo } from "../model/Bolodio";

export interface BolodioRepository {
  createBolodio(bolodio: Jogo): Promise<void>;
}
