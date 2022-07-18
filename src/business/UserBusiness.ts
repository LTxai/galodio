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
import { invalidUser } from "../Errors/InvalidUser";
import { MissingFieldsToComplete } from "../Errors/MissingFieldsToComplete";
import { Login, Signup, SignupInputDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGen";
import transporter from "../services/nodeMailerTransporter";
import { PasswordGenerator } from "../services/PassGen";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
  constructor(private userDataBase: UserRepository) {}
  async signupBusiness(signup: SignupInputDTO) {
    try {
      const { nome, apelido, sobrenome, email, telefone, role } = signup;

      if (!nome || !email || !apelido || !sobrenome || !telefone || !role) {
        throw new MissingFieldsToComplete();
      }

      if (!email.includes("@")) {
        throw new invalidEmail();
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

      const passGenerator = new PasswordGenerator();
      const senha = passGenerator.generatePassword();

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

      await transporter.sendMail({
        from: `${process.env.NODEMAILER_USER}`,
        to: email,
        subject: `${apelido}, diga olá para a Galódio`,
        text: "Seja muito bem vinda/vindo à Galódio. Aqui está sua senha!",
        html: `<p>Olá, ${nome}. É uma alegria inenarrável ter a sua presença conosco.</p>
        <p>O login no nosso site é feito através desse endereço de email (${email}) e da senha.
        <p>A sua senha é: <strong>${senha}</strong></p>
        <p>Ela foi gerada automaticamente e pode ser alterada quando você quiser.</p>
        <p>Estamos esperando pelo seus palpites no Bolódio.</p>`,
      });

      return acessToken;
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }

  async loginBusiness(login: Login) {
    try {
      const { email, senha } = login;

      if (!senha || !email) {
        throw new MissingFieldsToComplete();
      }
      const user = this.userDataBase.findUserEmail(email);
      if (!user) {
        throw new invalidUser();
      }
      if (!email.includes("@")) {
        throw new invalidEmail();
      }

      const hashManager = new HashManager();
      const passwordIsCorrect = await hashManager.compare(
        senha,
        (
          await user
        ).senha
      );
      const authenticator = new Authenticator();
      const token = authenticator.generate({ id: (await user).id });

      if (!passwordIsCorrect) {
        throw new invalidPassword();
      }

      return token;
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}
