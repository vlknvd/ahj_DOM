export default class Board {
  constructor() {
    this.board = null;
  }

  createBoard() {
    const board = document.createElement('div');
    board.classList.add('board');
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.append(cell);
    }
    this.board = board;
    return this.board;
  }
}
