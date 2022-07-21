export interface Jogo {
  id: string;
  adversario: string;
  dia: string;
  criador: string;
  mando: string;
  liberado: boolean;
  campeonato: string;
}

export interface JogoInputDTO {
  adversario: string;
  dia: string;
  token: string;
  mando: string;
  liberado: boolean;
  campeonato: string;
}

export interface Jogos extends Array<Jogo> {}
