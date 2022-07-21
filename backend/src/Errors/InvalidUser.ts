import { BaseError } from "./BaseError";

export class invalidUser extends BaseError {
    constructor() {
      super(401, "Usuário não encontrado");
    }
  }