export interface Signup {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  apelido: string;
  senha: string;
  telefone: string;
  role: UserRole;
}

export interface SignupInputDTO {
  apelido: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  role: UserRole;
}

export interface Login {
  senha: string;
  email: string;
}

export interface User {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  apelido: string;
  senha: string;
  telefone: string;
  role: UserRole;
}

export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
