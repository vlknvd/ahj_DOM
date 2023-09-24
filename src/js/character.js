export default class Character {
  constructor() {
    this.character = '';
  }

  createCharacter() {
    const char = document.createElement('div');
    char.classList.add('char');
    this.character = char;
    return this.character;
  }
}
