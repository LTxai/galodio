import { BaseError } from "../Errors/BaseError";
import {
  invalidEmail,
  invalidLastName,
  invalidName,
  invalidNickName,
  invalidPassword,
  invalidUserCellphone,
  invalidUserEmail,
} from "../Errors/InvalidData";
import { MissingFieldsToComplete } from "../Errors/MissingFieldsToComplete";
import { Signup, SignupInputDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGen";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
  constructor(private userDataBase: UserRepository) {}
  async signupBusiness(signup: SignupInputDTO) {
    try {
      const { nome, apelido, sobrenome, email, senha, telefone, role } = signup;

      if (
        !nome ||
        !email ||
        !senha ||
        !apelido ||
        !sobrenome ||
        !telefone ||
        !role
      ) {
        throw new MissingFieldsToComplete();
      }

      if (!email.includes("@")) {
        throw new invalidEmail();
      }

      if (senha.length < 8) {
        throw new invalidPassword();
      }
      if (nome.length < 3) {
        throw new invalidName();
      }
      if (sobrenome.length < 3) {
        throw new invalidLastName();
      }
      if (apelido.length < 2) {
        throw new invalidNickName();
      }

      const findEmail = await this.userDataBase.findUserEmail(email);
      if (findEmail) {
        throw new invalidUserEmail();
      }
      const findCellphone = await this.userDataBase.findUserCellphone(telefone);
      if (findCellphone) {
        throw new invalidUserCellphone();
      }

      const idGenerator = new IdGenerator();
      const id = idGenerator.generateId();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(senha);

      const newSignup: Signup = {
        apelido,
        email,
        id,
        nome,
        sobrenome,
        telefone,
        senha: hashPassword,
        role,
      };
      await this.userDataBase.singup(newSignup);

      const authenticator = new Authenticator();
      const acessToken = authenticator.generate({ id, role: role });

      return acessToken;
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}
