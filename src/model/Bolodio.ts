export interface Jogo {
  id: string;
  adversario: string;
  dia: string;
  criador: string;
}

export interface JogoInputDTO {
  adversario: string;
  dia: string;
  token: string;
}

export interface Palpite {
  id: string;
  golsGalo: number;
  golsAdversario: number;
  autorPalpite: string;
}

export interface PalpiteDTO {
  golsGalo: number;
  golsAdversario: number;
}
