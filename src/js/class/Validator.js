export default class Validator {
  static validateUsername(nikName) {
    const allowedSymbols = /^[a-zA-Z0-9-_]+$/.test(nikName); // допустимы латинские буквы, цифры, -, _
    const not3nunber = !/\d{3}/.test(nikName); // не допустимы три цифры подряд и более
    const notDefisStart = !/^-/.test(nikName); // не допустимы - в начале
    const notUnderlineStart = !/^_/.test(nikName); // не допустимы _ в начале
    const notDefisEnd = !/-$/.test(nikName); // не допустимы - в конце
    const notUnderlineEnd = !/_$/.test(nikName); // не допустимы _ в конце

    if (not3nunber && notDefisStart && notUnderlineStart && notDefisEnd && notUnderlineEnd) {
      return allowedSymbols;
    }
    return false;
  }
}
