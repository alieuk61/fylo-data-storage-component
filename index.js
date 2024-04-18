const slider = document.querySelector('.slider');
const sliderValue = slider.value
const percentage = (sliderValue / 1000) * 100;
console.log(slider.value, percentage)

slider.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${percentage}%, transparent ${percentage}%)`