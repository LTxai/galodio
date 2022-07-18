export class PasswordGenerator {
  generatePassword(): string {
    const generator = require("generate-password");
    const password = generator.generate({
      length: 8,
      numbers: true,
      excludeSimilarCharacters: true,
      symbols: true,
    });
    return password;
  }
}
