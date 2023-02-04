export default class UserInfo {
  constructor({ inputName, inputAboutMe }) {
    this._inputName = inputName;
    this._inputAboutMe = inputAboutMe;
    this._userTitle = document.querySelector('.info__title');
    this._textAboutMe = document.querySelector('.info__subtitle');
  }

  getUserInfo() {
    return {
      userName: this._inputName.value,
      userAboutMe: this._inputAboutMe.value,
    };
  }

  setUserInfo() {
    const newUserData = this.getUserInfo();

    this._userTitle.textContent = newUserData.userName;
    this._textAboutMe.textContent = newUserData.userAboutMe;

    return newUserData;
  }
}
