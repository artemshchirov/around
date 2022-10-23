(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n,r,o=e.baseUrl,i=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},(n="_handleResponse")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._address=o,this._token=i.authorization}var n,r;return n=t,(r=[{key:"setAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"addItem",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._handleResponse)}},{key:"deleteItem",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then(this._handleResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){var o=r.handleCardClick,i=r.handleDeleteCard,a=r.handleChangeLikeStatus;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=t._id,this._title=t.name,this._image=t.link,this._likes=t.likes,this._owner=t.owner.name,this._cardSelector=n,this._handleCardClick=o,this._handleDeleteCard=i,this._handleChangeLikeStatus=a}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector("#".concat(this._cardSelector)).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(e,t){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._buttonLike=this._element.querySelector(".button_like"),this._countLikes=this._element.querySelector(".card__like-count"),this._countLikes.textContent=this._likes.length,this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._title,this._cardImage.src=this._image,this._cardImage.alt="User image: ".concat(this._title),this._isLiked=t,e||(this._element.querySelector(".button_card_delete").style.display="none"),this._isLiked&&this._buttonLike.classList.add("button_like_isLiked"),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){return e._handleCardClick()})),this._buttonLike.addEventListener("click",(function(){e._isLiked=!e._isLiked,e._handleChangeLikeStatus()})),this._element.querySelector(".button_card_delete").addEventListener("click",(function(){return e._handleDeleteCard()}))}},{key:"getLikeStatus",value:function(){return this._isLiked}},{key:"getId",value:function(){return this._id}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"updateLike",value:function(e){this._buttonLike.classList.toggle("button_like_isLiked"),this._countLikes.textContent=e.length}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this._container.prepend(e):this._container.append(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}],n&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent.trim(),about:this._about.textContent.trim(),avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name.textContent=t.trim(),this._about.textContent=n.trim()}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._button=this._form.querySelector(this._settings.submitButtonSelector),this._inactiveButtonClass=this._settings.inactiveButtonClass}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this._enableButton()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableButton",value:function(){this._button.disabled=!0,this._button.classList.add(this._inactiveButtonClass)}},{key:"_enableButton",value:function(){this._button.disabled=!1,this._button.classList.remove(this._inactiveButtonClass)}},{key:"_checkInputValidity",value:function(e){this._input=e,this._error=this._form.querySelector("#".concat(this._input.id,"-error")),this._input.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hideInputError",value:function(e){this._error.textContent="",this._error.classList.remove(this._settings.errorClass),e.classList.remove(this._settings.inputErrorClass)}},{key:"_showInputError",value:function(e,t){this._error.textContent=t,this._error.classList.add(this._settings.errorClass),e.classList.add(this._settings.inputErrorClass)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._error=e._form.querySelector("#".concat(t.id,"-error")),e._hideInputError(t)}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._element=document.querySelector(this._popupSelector),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._element.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._element.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._closeButton=this._element.querySelector(".button_popup_close"),this._overlay=this._element.querySelector(".popup__overlay"),this._closeButton.addEventListener("click",(function(){return e.close()})),this._overlay.addEventListener("click",(function(){return e.close()}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function m(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._element.querySelector(".form"),t._inputList=t._element.querySelectorAll(".form__input"),t._handleFormSubmit=r,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){d(v(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;d(v(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){return e._handleFormSubmit(e._getInputValues())}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(f);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function L(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link,r=e.alt;this._element.querySelector(".popup__image-title").textContent=t,this._image=this._element.querySelector(".popup__image"),this._image.src=n,this._image.alt=r,S(O(a.prototype),"open",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(f);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function T(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._element.querySelector(".form"),n._handleSubmit=r,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;I(B(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}},{key:"setSubmitAction",value:function(e){var t=e.handleSubmitAction;this.submitAction=t}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(f),x=document.querySelector(".popup_card-add").querySelector(".form"),U=document.querySelector(".popup-profile-edit").querySelector(".form"),D=document.querySelector(".popup_edit-avatar").querySelector(".form"),V=document.querySelector(".button_profile_add"),z=document.querySelector(".button_profile_edit"),F=document.querySelector(".profile__avatar-container"),N=document.getElementById("name-edit"),J=document.getElementById("about-edit"),H={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".button_form_submit",inactiveButtonClass:"button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"};function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-35",headers:{authorization:"e3cd37b0-56ab-40c1-b26c-66c00d48e156","Content-Type":"application/json"}}),$=new i({renderer:function(e){var t=X(e,"card");$.addItem(t)}},".cards");Promise.all([Y.getUserInfo(),Y.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=o.name,a=o.about,u=o.avatar,c=r[1];ne.setUserInfo({name:i,about:a}),ne.setUserAvatar(u),$.renderItems(c)})).catch((function(e){return console.log("Error loading user profile and cards: ".concat(e))}));var G=new b({popupSelector:".popup_card-add",handleFormSubmit:function(e){Z(!0,"button_submit-add-card"),Y.addItem({name:e["name-card_input"],link:e["link-card_input"]}).then((function(e){var t=X(e,"card");$.addItem(t,!0),G.close()})).catch((function(e){return console.log("Error create card: ".concat(e))})).finally((function(){return Z(!1,"button_submit-add-card")}))}});G.setEventListeners();var K=new b({popupSelector:".popup-profile-edit",handleFormSubmit:function(e){Z(!0,"button_submit-edit-profile"),Y.setUserInfo({name:e["name-edit_input"],about:e["about-edit_input"]}).then((function(){ne.setUserInfo({name:e["name-edit_input"],about:e["about-edit_input"]}),K.close()})).catch((function(e){return console.log("Error update user info: ".concat(e))})).finally((function(){return Z(!1,"button_submit-edit-profile")}))}});K.setEventListeners();var Q=new C(".popup_card-fullscreen");Q.setEventListeners();var W=new A(".popup_card-delete-confirm",{handleSubmit:function(){return W.submitAction()}});W.setEventListeners();var X=function(e,t){var n=new r(e,t,{handleCardClick:function(){return Q.open(e)},handleDeleteCard:function(){W.setSubmitAction({handleSubmitAction:function(){ee(!0,"button_form_submit-delete-card"),Y.deleteItem(n.getId()).then((function(){n.deleteCard(),W.close()})).catch((function(e){return console.log("Error remove card: ".concat(e))})).finally((function(){return ee(!1,"button_form_submit-delete-card")}))}}),W.open()},handleChangeLikeStatus:function(){n.getLikeStatus()?Y.addLike(n.getId()).then((function(e){return n.updateLike(e.likes)})).catch((function(e){return console.log("Error add like: ".concat(e))})):Y.deleteLike(n.getId()).then((function(e){return n.updateLike(e.likes)})).catch((function(e){return console.log("Error remove like: ".concat(e))}))}}),o=ne.getUserInfo().name,i=e.owner.name===o,a=e.likes.some((function(e){return e.name===o}));return n.generateCard(i,a)},Z=function(e,t){document.querySelector(".".concat(t)).textContent=e?"Saving...":"Save"},ee=function(e,t){document.querySelector(".".concat(t)).textContent=e?"Deleting...":"Yes"},te=new b({popupSelector:".popup_edit-avatar",handleFormSubmit:function(e){Z(!0,"button_submit-change-avatar"),Y.setAvatar({avatar:e["link-avatar_input"]}).then((function(){ne.setUserAvatar(e["link-avatar_input"]),te.close()})).catch((function(e){return console.log("Error update avatar: ".concat(e))})).finally((function(){return Z(!1,"button_submit-change-avatar")}))}});te.setEventListeners();var ne=new u({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"}),re=new s(H,U),oe=new s(H,x),ie=new s(H,D);re.enableValidation(),oe.enableValidation(),ie.enableValidation(),z.addEventListener("click",(function(){var e,t,n;t=(e=ne.getUserInfo()).name,n=e.about,N.value=t,J.value=n,re.resetValidation(),K.open()})),V.addEventListener("click",(function(){oe.resetValidation(),G.open()})),F.addEventListener("click",(function(){ie.resetValidation(),te.open()}))})();