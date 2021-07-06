(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.cardClickAction,u=e.likeClickAction,a=e.confirmDeleteAction;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=document.querySelector(n),this._name=o.name,this._link=o.link,this._likes=o.likes,this._id=o._id,this._userId=r,this._ownerId=o.owner._id,this._cardClickAction=i,this._likeClickAction=u,this._confirmDeleteAction=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){this._cardElement=this._cardSelector.content.querySelector(".element").cloneNode(!0)}},{key:"updateLikesCount",value:function(e){this._likes=e,this.setLikeCount(e.length)}},{key:"setLikeCount",value:function(e){this._cardElement.querySelector(".element__like-count").textContent=e,this._toggleLikeButton(this._userId)}},{key:"likedByUser",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"_toggleLikeButton",value:function(){this.likedByUser(this._userId)?this._likeButton.classList.add("element__like_active"):this._likeButton.classList.remove("element__like_active")}},{key:"deleteCard",value:function(){this._cardElement.closest(".element").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeElement=this._cardElement.querySelector(".element__like"),this._likeElement.addEventListener("click",(function(){return e._likeClickAction()})),this._cardElement.querySelector(".element__trash-icon").addEventListener("click",(function(){return e._confirmDeleteAction()})),this._cardElement.querySelector(".element__image").addEventListener("click",(function(){return e._cardClickAction({name:e._name,link:e._link})}))}},{key:"generateCard",value:function(){var e=this;this._getTemplate();var t=this._cardElement.querySelector(".element__image");return t.src=this._link,t.alt=this._name,this._cardElement.querySelector(".element__name").textContent=this._name,this._likeButton=this._cardElement.querySelector(".element__like"),this._cardElement.querySelector(".element__like-count").textContent=this._likes.length,this._likes.find((function(t){return e._userId===t._id}))&&this._cardElement.querySelector(".element__like").classList.add("element__like_active"),this._ownerId!==this._userId&&(this._cardElement.querySelector(".element__trash-icon").style.display="none"),this._setEventListeners(),this._cardElement}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._disableButtonClass=t.disableButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorActiveClass=t.errorActiveClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorActiveClass),n.textContent=t}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorActiveClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disableSubmitButton():(this._buttonElement.classList.remove(this._disableButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._disableButtonClass),this._buttonElement.disabled=!0}},{key:"enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._disableButtonClass),this._buttonElement.disabled=!1}},{key:"hideErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose),this._popupElement.addEventListener("mousedown",this._handleOverlayClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose),this._popupElement.removeEventListener("mousedown",this._handleOverlayClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()}))}}])&&u(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitButtonCallback=t,n._formSelector=n._popupElement.querySelector(".form"),n._inputList=n._formSelector.querySelectorAll(".form__element-text"),n._popupButton=n._formSelector.querySelector(".form__save-button"),n._popupButtonTextContent=n._popupButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;l(p(u.prototype),"setEventListeners",this).call(this),this._formSelector.addEventListener("submit",(function(t){t.preventDefault(),e._submitButtonCallback(e._getInputValues())}))}},{key:"close",value:function(){l(p(u.prototype),"close",this).call(this),this._formSelector.reset()}},{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._popupButtonTextContent}}])&&s(t.prototype,n),u}(a);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"open",value:function(e){m(k(u.prototype),"open",this).call(this),this._popupImage=this._popupElement.querySelector(".popup__image"),this._popupDescription=this._popupElement.querySelector(".popup__image-description"),this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupDescription.textContent=e.name}}])&&y(t.prototype,n),u}(a);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t.name),this._profileDescription=document.querySelector(t.description),this._profileAvatar=document.querySelector(t.avatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={name:this._profileName.textContent,description:this._profileDescription.textContent},this._userData}},{key:"setUserInfo",value:function(e){e.name&&(this._profileName.textContent=e.name),e.about&&(this._profileDescription.textContent=e.about),this.setUserAvatar(e)}},{key:"setUserAvatar",value:function(e){e.avatar&&(this._profileAvatar.src=e.avatar)}}])&&g(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkErrors",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkErrors)}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkErrors)}},{key:"setUserInfoByApi",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.description})}).then(this._checkErrors)}},{key:"addCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkErrors)}},{key:"addLike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then(this._checkErrors)}},{key:"deleteLike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkErrors)}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkErrors)}},{key:"changeUserAvatar",value:function(e){return console.log(e),fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkErrors)}},{key:"getData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}])&&C(t.prototype,n),e}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return(B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._formSelector=t._popupElement.querySelector(".form"),t._popupButton=t._formSelector.querySelector(".form__save-button"),t._popupButtonTextContent=t._popupButton.textContent,t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;B(A(u.prototype),"setEventListeners",this).call(this),this._formSelector.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}},{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._popupButtonTextContent}}])&&O(t.prototype,n),u}(a),P=document.querySelector(".profile__edit-button"),T=document.querySelector(".profile__add-button"),x=document.querySelector(".profile__avatar-edit-button"),R=document.querySelector(".popup_function_edit"),D=document.querySelector(".popup_function_add"),U=document.querySelector(".popup_function_image"),V=document.querySelector(".popup_function_confirm-delete"),N=document.querySelector(".popup_function_avatar-edit"),J=document.querySelector(".form_function_edit"),G=document.querySelector(".form_function_add"),H=document.querySelector(".form_function_avatar-edit"),M=J.querySelector('input[name="name"]'),z=J.querySelector('input[name="description"]'),$={formSelector:".form",inputSelector:".form__element-text",submitButtonSelector:".form__save-button",inputErrorClass:"form__element-text_type-error",errorActiveClass:"form__input-error_active",disableButtonClass:"form__save-button_disabled"};function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=new r($,J);K.enableValidation();var Q=new r($,H);Q.enableValidation();var W=new r($,G);W.enableValidation();var X=new S({name:".profile__name",description:".profile__description",avatar:".profile__avatar"}),Y=new d(R,(function(e){Y.renderLoading(!0),ue.setUserInfoByApi(e).then((function(){Y.close()})).catch((function(e){return console.log(e)})).finally((function(){return Y.renderLoading(!1)}))}));Y.setEventListeners();var Z=new d(N,(function(e){ue.changeUserAvatar(e).then((function(e){Z.renderLoading(!0),X.setUserAvatar(e),Q.disableSubmitButton(),Z.close()})).catch((function(e){return console.log(e)})).finally((function(){return Z.renderLoading(!1)}))}));Z.setEventListeners();var ee=new E(U);ee.setEventListeners();var te=new d(D,(function(e){te.renderLoading(!0),ue.addCard(e).then((function(e){var t=oe(e).generateCard();ie.addItem(t),W.disableSubmitButton(),te.close()})).catch((function(e){return console.log(e)})).finally((function(){return te.renderLoading(!1)}))}));te.setEventListeners();var ne=new I(V);ne.setEventListeners(),P.addEventListener("click",(function(){var e=X.getUserInfo();K.enableSubmitButton(),K.hideErrors(),M.value=e.name,z.value=e.description,Y.open()})),x.addEventListener("click",(function(){Z.open(),Q.hideErrors()})),T.addEventListener("click",(function(){te.open(),W.hideErrors()}));var re,oe=function(e){var n=new t({data:e,cardClickAction:function(){ee.open(e)},likeClickAction:function(){n.likedByUser()?ue.deleteLike(n._id).then((function(e){n.updateLikesCount(e.likes)})).catch((function(e){console.log(e)})):ue.addLike(n._id).then((function(e){n.updateLikesCount(e.likes)})).catch((function(e){console.log(e)}))},confirmDeleteAction:function(){ne.open(),ne.setSubmitAction((function(){ne.renderLoading(!0),ue.deleteCard(e._id).then((function(){n.deleteCard(),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){return ne.renderLoading(!1)}))}))}},"#elementTemplate",re);return n},ie=new i({renderer:function(e){var t=oe(e).generateCard();ie.addItem(t)}},".elements"),ue=new w({url:"https://mesto.nomoreparties.co/v1/cohort-25",headers:{authorization:"1e3ace66-7bc0-4085-a74d-3975b1264152","Content-Type":"application/json"}});ue.getData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X.setUserInfo(i),re=i._id,ie.renderItems(o)})).catch((function(e){return console.log(e)}))})();