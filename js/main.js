const images = [
	"adult-asian-food-celebration.jpg",
	"beans-brew-caffeine.jpg",
	"bread-breakfast-coffee.jpg"
];

var currentSlide = 0;

function createSlides() {
	for (var i = 0; i < images.length; i++) {
		var container = document.querySelector(".container");
		var slide = document.createElement("div");
		slide.classList.add("slide");
		if (i == 0) {
			slide.classList.add("visible");
		}
		slide.style.backgroundImage = "url('./img/" + images[i] + "')";
		container.appendChild(slide);
	}
}

function changeSlide() {
	var slides = document.querySelectorAll(".slide");
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.remove("visible");
	}
	slides[currentSlide].classList.add("visible");
	currentSlide++;
	if (currentSlide == slides.length) {
		currentSlide = 0;
	}
	setTimeout(changeSlide, 5000);
}

createSlides();

setTimeout(changeSlide, 5000);