import { Password } from "../models/password";
import passwordsData from "../mock/password.json";
import PasswordCreateDao from "../dao/passwordCreateDao";

const passwords: Password[] = passwordsData;

class PasswordService {
  static getAll() {
    return passwords;
  }

  static save(item: PasswordCreateDao) {
    const newPassword = {
      id: Math.max(...passwords.map((item) => item.id)) + 1,
      ...item,
    };
    passwords.push(newPassword);
    return newPassword;
  }

  static update(id: number, item: PasswordCreateDao) {
    const idPassword = passwords.find((item) => item.id === id);
    if (!idPassword) {
      return null;
    }
    const newPassword = {
      id,
      ...item,
    };
    passwords[passwords.indexOf(idPassword)] = newPassword;
    return newPassword;
  }

  static delete(id: number) {
    const idPassword = passwords.find((item) => item.id === id);
    if (!idPassword) {
      return null;
    }
    passwords.splice(passwords.indexOf(idPassword), 1);
    return passwords;
  }
}

export default PasswordService;
