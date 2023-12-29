import Module from "node:module";
const require = Module.createRequire(import.meta.url)
const prompt = require('prompt-sync')({ sigint: true })
const print = console.log;

export default class Question {
  constructor(questionText) {
    this.questionText = questionText
    this.answer = prompt(questionText).toUpperCase()
  }

}