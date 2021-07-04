export default class UserInfo {
    constructor(userInfoSelectors) {
        this._profileName = document.querySelector(userInfoSelectors.name);
        this._profileDescription = document.querySelector(userInfoSelectors.description);
        this._profileAvatar = document.querySelector(userInfoSelectors.avatar);
    }

    getUserInfo() {
        this._userData = {
            name: this._profileName.textContent,
            description: this._profileDescription.textContent
        }
        return this._userData
    }

    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileDescription.textContent = data.about;
        this.setUserAvatar(data);
    }

    setUserAvatar(data) {
        this._profileAvatar.src = data.avatar;
    }
}