import { Signup, User } from "../model/User";

export interface UserRepository {
  singup(signup: Signup): Promise<void>;
  findUserEmail(email: string): Promise<User>;
  findUserCellphone(telefone: string): Promise<User>;
}
