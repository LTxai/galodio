export interface Palpite {
  id: string;
  golsGalo: number;
  golsAdversario: number;
  jogoId: string;
  autorPalpite: string;
}

export interface PalpiteDTO {
  golsGalo: number;
  golsAdversario: number;
  token: string;
  jogoId: string;
  autorPalpite: string;
}
