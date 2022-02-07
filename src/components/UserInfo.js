export default class UserInfo {
  /** Managing the display of user information on the page.
   * 
   * @constructor
   * @param  {string} {nameSelector  - selector for finding username on the page
   * @param  {string} aboutSelector} - - selector for finding about info on the page
   */
  constructor({ nameSelector, aboutSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  /**
   * @return {object} - info about user {name, about}.
   */
  getUserInfo() {
    return { 
      name: this._name.textContent.trim(), 
      about: this._about.textContent.trim(), 
      avatar: this._avatar.src
    };
  }

  /**
   * Receive user data and add her on the page.
   */
  setUserInfo({ name, about, avatar }) {
    this._name.textContent = name.trim();
    this._about.textContent = about.trim();
    this._avatar.src = avatar || this._avatar.src;
  }
}