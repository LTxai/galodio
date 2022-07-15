import { UserRepository } from "../business/UserRepository";
import { BaseError } from "../Errors/BaseError";
import { Signup, User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase implements UserRepository {
  private static TABLE_NAME = "galodio_membro";

  async singup(signup: Signup): Promise<void> {
    try {
      await this.getConnection().insert(signup).into(UserDataBase.TABLE_NAME);
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }

  async findUserEmail(email: string): Promise<User> {
    try {
      const user = await this.getConnection()
        .select(`*`)
        .where({ email })
        .into(UserDataBase.TABLE_NAME);
      return user[0];
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }

  async findUserCellphone(telefone: string): Promise<User> {
    try {
      const user = await this.getConnection()
        .select(`*`)
        .where({ telefone })
        .into(UserDataBase.TABLE_NAME);
      return user[0];
    } catch (error: any) {
      throw new BaseError(error.statusCode, error.sqlMessage || error.message);
    }
  }
}
