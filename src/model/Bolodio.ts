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

