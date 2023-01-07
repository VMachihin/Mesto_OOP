import { userTitle, textAboutMe } from '../utils/constants.js';

export default class UserInfo {
  constructor({ name, aboutMe }) {
    this._username = name;
    this._userInfo = aboutMe;
  }

  getUserInfo() {
    const userInputValue = {};

    userInputValue.name = this._username.value;
    userInputValue.aboutMe = this._userInfo.value;

    return userInputValue;
  }

  setUserInfo() {
    const newUserData = this.getUserInfo();

    userTitle.textContent = newUserData.name;
    textAboutMe.textContent = newUserData.aboutMe;
  }
}