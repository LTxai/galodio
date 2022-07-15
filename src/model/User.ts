export interface Signup {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  apelido: string;
  senha: string;
  telefone: string;
  role: string;
}

export interface SignupInputDTO {
  apelido: string;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  telefone: string;
  role: string;
}

export interface Login {
  email: string;
  senha: string;
  apelido: string;
  telefone: string;
}

export interface AuthenticationData {
  id: string;
  role: string;
}

export interface User {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  apelido: string;
  senha: string;
  telefone: string;
}

export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}