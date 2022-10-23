let editInfoBtn = document.querySelector('.info__editing-btn');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');
let formInfo = document.querySelector('.popup__container');
let nameInput = document.querySelector('#name');
let aboutMeInput = document.querySelector('#aboutMe');

// Открытие попапа
editInfoBtn.addEventListener('click', function showPopup() {
	popup.classList.add('popup_opened')
})
// Закрытие попапа
closePopup.addEventListener('click', function closePopup() {
	popup.classList.remove('popup_opened')
})

function editInfoHandler(evt) {
	evt.preventDefault();

	let nameUser = document.querySelector('.info__title');
	let aboutMe = document.querySelector('.info__subtitle');

	nameUser.textContent = nameInput.value;
	aboutMe.textContent = aboutMeInput.value;

	popup.classList.remove('popup_opened')
}

formInfo.addEventListener('submit', editInfoHandler); 