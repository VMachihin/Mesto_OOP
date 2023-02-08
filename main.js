(()=>{"use strict";document.querySelectorAll(".popup"),document.forms["popup-editUser"],document.forms["popup-addCard"];var t=document.querySelector(".profile__img"),e=document.querySelector(".info__title"),n=document.querySelector(".info__subtitle"),r=document.querySelector(".info__editing-btn"),o=document.querySelector(".profile__add-btn"),i=document.querySelector(".profile__image-wrp"),u=document.querySelector(".gallery__list");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var l=function(){function t(e,n,r,o,i,u,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=e,this._title=e.name,this._urlImg=e.link,this._elementLikes=e.likes,this._myId=n,this._cardOwnerId=e.owner._id,this._cardId=e._id,this._templateSelector=r,this._handleCardClick=o,this._handleDeleteCard=i,this._handleLikeCard=u,this._handleDislikeCard=c}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return this._itemCard=document.querySelector(this._templateSelector).content.querySelector(".gallery__item").cloneNode(!0),this._itemCard}},{key:"toggleLike",value:function(){this._likeBtn.classList.toggle("card__btn_like_liked")}},{key:"changeCounterLikes",value:function(t){this._counterLikes.textContent=t.likes.length}},{key:"deleteCard",value:function(){this._cardElement.remove()}},{key:"_setEventListener",value:function(){var t=this;this._likeBtn.addEventListener("click",(function(){t._likeBtn.classList.contains("card__btn_like_liked")?t._handleDislikeCard(t._cardId,t):t._handleLikeCard(t._cardId,t)})),this._basketBtn.addEventListener("click",(function(){t._handleDeleteCard(t._cardId,t._cardElement,t)})),this._cardImg.addEventListener("click",(function(){t._handleCardClick(t._title,t._urlImg)}))}},{key:"makeCard",value:function(){var t=this;return this._cardElement=this._getTemplate(),this._cardImg=this._cardElement.querySelector(".card__img"),this._cardImg.src=this._urlImg,this._cardImg.alt="Картинка с красивым видом на ".concat(this._title),this._cardElement.querySelector(".card__title").textContent=this._title,this._counterLikes=this._cardElement.querySelector(".card__counter-likes"),this._likeBtn=this._cardElement.querySelector(".card__btn_like"),this._basketBtn=this._cardElement.querySelector(".card__btn_basket"),this._counterLikes.textContent=this._elementLikes.length,this._myId!==this._cardOwnerId&&(this._basketBtn.style.display="none"),this._elementLikes.forEach((function(e){e._id===t._myId&&t._likeBtn.classList.add("card__btn_like_liked")})),this._setEventListener(),this._cardElement}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,n=[{key:"renderCards",value:function(t,e){var n=this;e.forEach((function(e){var r=n._renderer(e,t);n._container.prepend(r)}))}}],n&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._buttonKey="Escape",this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){t.key===this._buttonKey&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=b(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImages=document.querySelector(".popup__image"),e._popupTitleBigImg=document.querySelector(".popup__title_bigImg"),e}return e=u,(n=[{key:"open",value:function(t,e){this._name=t,this._link=e,this._popupImages.src=this._link,this._popupImages.alt=this._name,this._popupTitleBigImg.textContent=this._name,v(k(u.prototype),"open",this).call(this)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=j(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function j(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function L(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return L(this,t)});function u(t){var e,n=t.selector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._formContainer=document.querySelector(n),e._handleFormSubmit=r,e._formElement=e._formContainer.querySelector(".popup__form"),e._inputList=e._formContainer.querySelectorAll(".popup__input"),e._submitBtn=e._formContainer.querySelector(".popup__btn"),e._submitBtnText=e._formContainer.querySelector(".popup__btn").textContent,e}return e=u,n=[{key:"_getInputValues",value:function(){var t=this;return this.inputValues={},this._inputList.forEach((function(e){t.inputValues[e.name]=e.value})),this.inputValues}},{key:"setInputValue",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"close",value:function(){this._formElement.reset(),O(I(u.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitBtn.textContent=t?e:this._submitBtnText}},{key:"setEventListeners",value:function(){var t=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())})),O(I(u.prototype),"setEventListeners",this).call(this)}}],n&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=q(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function V(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return V(this,t)});function u(t){var e,n=t.selector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._formContainer=document.querySelector(n),e._handleFormSubmit=r,e._formElement=e._formContainer.querySelector(".popup__form"),e}return e=u,(n=[{key:"open",value:function(t,e,n){this._cardId=t,this._card=n,this._cardElement=e,A(U(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;A(U(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._cardId,t._cardElement,t._card)}))}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}var M=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=e,this._infoAboutMe=n,this._userAvatar=r}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._infoAboutMe.textContent}}},{key:"setUserInfo",value:function(t,e){var n=e.name,r=e.about;this._myd=t,this._userName.textContent=n,this._infoAboutMe.textContent=r}},{key:"setUserAvatar",value:function(t){this._userAvatar.src=t}}],n&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var K=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=n,this._formElem=e}var e,n;return e=t,(n=[{key:"_showError",value:function(t){this._textError=this._formElem.querySelector(".".concat(t.id,"-error")),t.classList.add(this._settings.inputErrorClass),this._textError.textContent=t.validationMessage,this._textError.classList.add(this._settings.errorClass)}},{key:"hideError",value:function(t){this._textError=this._formElem.querySelector(".".concat(t.id,"-error")),t.classList.remove(this._settings.inputErrorClass),this._textError.textContent="",this._textError.classList.remove(this._settings.errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this.hideError(t):this._showError(t)}},{key:"_checkInputItems",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"_setEventListeners",value:function(){var t=this;this._inputs=Array.from(this._formElem.querySelectorAll(this._settings.inputSelector)),this._popupBtn=this._formElem.querySelector(this._settings.submitButtonSelector),this._changeButtonStyle(),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._changeButtonStyle()}))}))}},{key:"resetValidation",value:function(){var t=this;this._changeButtonStyle(),this._inputs.forEach((function(e){t.hideError(e)}))}},{key:"_changeButtonStyle",value:function(){this._checkInputItems()?(this._popupBtn.classList.add(this._settings.inactiveButtonClass),this._popupBtn.setAttribute("disabled","disabled")):(this._popupBtn.classList.remove(this._settings.inactiveButtonClass),this._popupBtn.removeAttribute("disabled","disabled"))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}var G,Q=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Кукусики: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"editingProfile",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._checkResponse(t)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.place,link:t.linkImg})}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCardApi",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"likeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"dislikeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"changeAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkResponse(t)}))}}])&&$(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var X,Y={};X={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__text-error_active"},Array.from(document.querySelectorAll(X.formSelector)).forEach((function(t){var e=new K(t,X),n=t.getAttribute("name");Y[n]=e,e.enableValidation()}));var Z=new Q({url:"https://mesto.nomoreparties.co/v1/cohort-58",headers:{authorization:"7c807b84-450d-4868-9be8-1ddb6e4753bd","Content-Type":"application/json"}}),tt=new M(e,n,t),et=new T({selector:".popup_editUser",handleFormSubmit:function(t){var r=t.name,o=t.about;e.textContent=r,n.textContent=o,et.renderLoading(!0),Z.editingProfile(tt.getUserInfo()).then((function(){et.close()})).catch((function(t){console.log(t)})).finally((function(){return et.renderLoading(!1)}))}}),nt=new T({selector:".popup_changeAvatar",handleFormSubmit:function(t){var e=t.linkAvatar,n={avatar:e};nt.renderLoading(!0),Z.changeAvatar(n).then((function(){tt.setUserAvatar(e),nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.renderLoading(!1)}))}}),rt=new w(".popup_bigImg");function ot(t,e){rt.open(t,e)}rt.setEventListeners();var it=new D({selector:".popup_deleteCard",handleFormSubmit:function(t,e,n){Z.deleteCardApi(t).then((function(){n.deleteCard(e),it.close()})).catch((function(t){console.log(t)}))}});function ut(t,e,n){it.open(t,e,n)}function ct(t,e){Z.likeCard(t).then((function(t){e.toggleLike(),e.changeCounterLikes(t)})).catch((function(t){console.log(t)}))}function at(t,e){Z.dislikeCard(t).then((function(t){e.toggleLike(),e.changeCounterLikes(t)})).catch((function(t){console.log(t)}))}it.setEventListeners();var lt=new T({selector:".popup_addCards",handleFormSubmit:function(t){var e={place:t.place,linkImg:t.linkImg};lt.setInputValue(e),lt.renderLoading(!0),Z.addNewCard(e).then((function(t){u.prepend(ft(t,t.owner._id)),lt.close()})).catch((function(t){console.log(t)})).finally((function(){return lt.renderLoading(!1)}))}}),st=new p({myId:G,renderer:ft},u);function ft(t,e){return new l(t,e,"#templateCard",ot,ut,ct,at).makeCard()}Promise.all([Z.getUserInfo(),Z.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];G=o._id,tt.setUserInfo(G,o),tt.setUserAvatar(o.avatar),G&&st.renderCards(G,i)})).catch((function(t){console.log(t)})),o.addEventListener("click",(function(){lt.open(),Y["popup-addCard"].resetValidation()})),lt.setEventListeners(),r.addEventListener("click",(function(){et.open(),et.setInputValue(tt.getUserInfo()),Y["popup-editUser"].resetValidation()})),et.setEventListeners(),i.addEventListener("click",(function(){nt.open(),Y["popup-update"].resetValidation()})),nt.setEventListeners()})();
//# sourceMappingURL=main.js.map