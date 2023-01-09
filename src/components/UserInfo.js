export default class UserInfo {
  constructor({ name, aboutMe }) {
    this._userName = name;
    this._userInfo = aboutMe;
    this._userTitle = document.querySelector('.info__title');
    this._textAboutMe = document.querySelector('.info__subtitle');
  }

  getUserInfo() {
    return {
      userName: this._userName.value,
      userAboutMe: this._userInfo.value
    };
  }

  setUserInfo() {
    const newUserData = this.getUserInfo();

    this._userTitle.textContent = newUserData.userName;
    this._textAboutMe.textContent = newUserData.userAboutMe;
  }
}