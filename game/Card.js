class Card {
  constructor(number, suite) {
    this.number = number;
    this.suite = suite;
    this.file_path = `./assets/cards/${number}${suite[0]}.jpg`;
  }
  getNumber() {
    return this.number;
  }
  getSuite() {
    return this.suite;
  }
}

module.exports = Card;
