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

	// При клике на заголовок, показываем/скрываем контент
	header.addEventListener('click', () => {
		content.classList.toggle('active');
		// Покажем или скроем все активные элементы аккордеона
		const activeItems = document.querySelectorAll('.accordion-item .accordion-content.active');
		activeItems.forEach(activeItem => {
			if (activeItem !== content) {
				activeItem.classList.remove('active');
			}
		});
	});
});