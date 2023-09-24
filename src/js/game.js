export default class Game {
  constructor(board, character) {
    this.board = board;
    this.character = character;
    this.cells = [];
  }

  init() {
    this.redrawBoard();
    setInterval(() => {
      this.generate();
    }, 1000);
  }

  redrawBoard() {
    const board = this.board.createBoard();
    const container = document.querySelector('.container');
    container.append(board);
    document.querySelectorAll('.cell').forEach((el) => {
      this.cells.push(el);
    });
  }

  generate() {
    const position = Math.floor(Math.random() * 16);
    if (position === this.position) {
      this.generate();
      return;
    }
    this.deletedCharacter();
    this.position = position;
    this.activeCharacter();
  }

  activeCharacter() {
    this.activeChar = this.character.createCharacter();
    const cell = this.cells[this.position];
    cell.append(this.activeChar);
  }

  deletedCharacter() {
    if (this.activeChar) {
      const cell = this.cells[this.position];
      cell.firstChild.remove();
    }
  }
}
