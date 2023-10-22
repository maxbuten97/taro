const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const accordionItems = document.querySelectorAll('.accordion-item');
let currentIndex = 0;

function showSlide(index) {
	if (index < 0) {
		currentIndex = 0;
	} else if (index >= 4) {
		currentIndex = 0;
	} else {
		currentIndex = index;
	}

	const offset = -currentIndex * 245;
	slider.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
	showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
	showSlide(currentIndex + 1);
});

// Добавляем обработчик событий к каждому элементу аккордеона
accordionItems.forEach(item => {
	const header = item.querySelector('.accordion-header');
	const content = item.querySelector('.accordion-content');
	const arrow = item.querySelector('.arrow_wrap'); // Получаем элемент стрелочки

	// При клике на заголовок, плавно изменяем высоту контента и меняем стиль стрелочки
	header.addEventListener('click', () => {
		content.classList.toggle('active');
		arrow.classList.toggle('active_arrow');
	});
});