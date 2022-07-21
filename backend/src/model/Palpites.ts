export interface Palpite {
  id: string;
  golsGalo: number;
  golsAdversario: number;
  jogo: string;
  autorPalpite: string;
}

export interface PalpiteDTO {
  golsGalo: number;
  golsAdversario: number;
  token: string;
  jogo: string;
  autorPalpite: string;
}
