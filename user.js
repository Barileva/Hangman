export default class user {
  constructor(userName) {
    this.userName = this.processName(userName);
  }
  processName(userName) {
    return userName.toUpperCase();
  }
}
