export default class UserInfo {
  /** Managing the display of user information on the page.
   * 
   * @constructor
   * @param  {string} {nameSelector
   * @param  {string} aboutSelector}
   */
  constructor({ nameSelector, aboutSelector }) {
    this._nameSelector = nameSelector;
    this._aboutSelector = aboutSelector;
    this._name = document.querySelector(this._nameSelector);
    this._about = document.querySelector(this._aboutSelector);
  }

  /**
   * @return {object} userData - user info: {name, about}.
   */
  getUserInfo() {
    console.log('UserInfo.getUserInfo()', { name: this._name.textContent.trim(), about: this._about.textContent.trim() });
    return { username: this._name.textContent.trim(), about: this._about.textContent.trim() };
  }

  /**
   * Receive user data and add her on the page.
   */
  setUserInfo({ username, about }) {
    console.log('UserInfo.setUserInfo()', 'username:', username, 'about:', about);
    this._name.textContent = username.trim();
    this._about.textContent = about.trim();
  }
}