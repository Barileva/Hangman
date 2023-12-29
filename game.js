import SecretWord from "./secret-word.js"
import Question from "./question.js"
import FoundWord from "./found-word.js"
import Gallows from "./gallows.js"
import User from "./user.js"
import File from "./file.js"

const print = console.log

export default class Game {

  secretWord
  foundWord
  gallows
  user
  score = 100

  constructor() {
    print("Welcome to a simple game of hangman. You are doomed!")
    this.runRound()
  }

  runRound() {
    this.gallows = new Gallows()
    this.File = new File()
    let question = new Question("Type the secret word, don't show your opponent: ")
    this.secretWord = new SecretWord(question.answer)
    print("The secret word has " + this.secretWord.length + " letters")
    this.foundWord = new FoundWord(this.secretWord)
    const getUserName = new Question("Please enter your name : ")
    this.user = new User(getUserName.answer)
    print(this.foundWord.asString)
    this.guessWord()

  }

  guessWord() {
    let letter = new Question("Guess a letter: ").answer
    print("You guessed " + letter)
    if (this.secretWord.isLetterInSecretWord(letter)) {
      let positions = this.secretWord.getLetterPositions(letter)
      this.foundWord.applyFoundLetter(letter, positions)
      print("You found \n" + this.foundWord.asString)
      this.checkWin()
    } else {
      print(this.gallows.step())
      this.checkLoose()
    }
  }

  checkWin() {
    if (!this.foundWord.letters.includes('*')) {
      print("Congratulations, you barely survived this time \n" + this.foundWord.asString)
    } else {
      this.guessWord()
      this.score = `win with the score : ${Number(this.score) - 10}`;
      return this.score
    }
  }

  checkLoose() {
    if (this.gallows.stages.length == 0) {
      print("Wonderful, you got to hang! \n" + "The word was " + this.secretWord.asString)
      this.score = "Lost score is 0";
      this.File.createFile(this.user.userName, this.score)
    } else {
      this.guessWord()
    }
  }

}
