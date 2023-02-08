export default class UserInfo {
  constructor(userName, infoAboutMe, userAvatar) {
    this._userName = userName;
    this._infoAboutMe = infoAboutMe;
    this._userAvatar = userAvatar;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._infoAboutMe.textContent,
    }
  }

  setUserInfo(myId, { name, about }) {
    this._myd = myId;
    this._userName.textContent = name;
    this._infoAboutMe.textContent = about;
  }

  setUserAvatar(urlAvatar) {
    this._userAvatar.src = urlAvatar;
  }
}
