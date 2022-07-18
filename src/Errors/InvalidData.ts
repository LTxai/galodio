import { BaseError } from "./BaseError";

export class invalidEmail extends BaseError {
  constructor() {
    super(401, "Email precisa ter um @");
  }
}
export class invalidName extends BaseError {
  constructor() {
    super(401, "Nome precisa ser maior que 3 letras");
  }
}
export class invalidLastName extends BaseError {
  constructor() {
    super(401, "Sobrenome precisa ser maior que 3 letras");
  }
}
export class invalidNickName extends BaseError {
  constructor() {
    super(401, "Apelido precisa ter mais de 2 letras");
  }
}
export class invalidPassword extends BaseError {
  constructor() {
    super(401, "Senha precisa ser maior que 8 caracteres");
  }
}
export class invalidCellphone extends BaseError {
  constructor() {
    super(401, "Você precisa inserir um telefone válido");
  }
}

export class invalidUserEmail extends BaseError {
  constructor() {
    super(401, "Email não encontrado!");
  }
}
export class invalidUserCellphone extends BaseError {
  constructor() {
    super(401, "Telefone não encontrado!");
  }
}
export class invalidToken extends BaseError {
  constructor() {
    super(401, "Token inválido!");
  }
}
export class invalidAuthenticatorData extends BaseError {
  constructor() {
      super(400, "Unauthorized user")
  }
}