let nameUser = document.querySelector('.info__title');
let aboutMe = document.querySelector('.info__subtitle');
let editInfoBtn = document.querySelector('.info__editing-btn');
let popup = document.querySelector('.popup');
let closePopupBtn = document.querySelector('.popup__close');
let formInfo = document.querySelector('.popup__container');
let nameInput = document.querySelector('#name');
let aboutMeInput = document.querySelector('#aboutMe');

// Открытие попапа
function showPopup() {
	nameInput.value = nameUser.textContent;
	aboutMeInput.value = aboutMe.textContent;
	popup.classList.add('popup_opened');
}
// Закрытие попапа
function closePopup() {
	popup.classList.remove('popup_opened')
}

function editInfoHandler(evt) {
	evt.preventDefault();

	nameUser.textContent = nameInput.value;
	aboutMe.textContent = aboutMeInput.value;

	popup.classList.remove('popup_opened')
}

editInfoBtn.addEventListener('click', showPopup);
closePopupBtn.addEventListener('click', closePopup);
formInfo.addEventListener('submit', editInfoHandler); 