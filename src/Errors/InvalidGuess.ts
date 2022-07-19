import { BaseError } from "./BaseError";

export class invalidGuess extends BaseError {
  constructor() {
    super(
      401,
      "Não viaja em mim não, Marcellus. O palpite do Bolódio tem que ser vitória do Galo ou empate!"
    );
  }
}
export class invalidScoreboard extends BaseError {
  constructor() {
    super(401, "Placar não pode ficar em branco.");
  }
}
