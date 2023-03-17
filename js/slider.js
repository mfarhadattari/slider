const sliders = [
  "./images/pic-1.jpg",
  "./images/pic-2.jpg",
  "./images/pic-3.jpg",
  "./images/pic-4.jpg",
  "./images/pic-5.jpg",
  "./images/pic-6.jpg",
  "./images/pic-7.jpg",
  "./images/pic-8.jpg",
  "./images/pic-9.jpg",
];

const slider = document.getElementById("slider-img");
let timer;
const autoView = () => {
  let sliderIndex = 0;
  let time = prompt("Set Time In Second") * 1000;
  if (time < 100) {
    alert("এতজুরেচালাইতেহবেনা!");
    return;
  }
  timer = setInterval(() => {
    if (sliderIndex === sliders.length) {
      sliderIndex = 0;
    }
    slider.setAttribute("src", sliders[sliderIndex]);
    sliderIndex++;
  }, time);
};
const stopAuto = () => {
  clearInterval(timer);
};

const nextSlide = () => {
  const src = slider.getAttribute("src");
  let slideIndex = sliders.indexOf(src);
  let nextSlideIndex = slideIndex + 1;
  if (nextSlideIndex === sliders.length) {
    nextSlideIndex = 0;
  }
  slider.setAttribute("src", sliders[nextSlideIndex]);
};

const previousSlide = () => {
  const src = slider.getAttribute("src");
  const slideIndex = sliders.indexOf(src);
  let previousSlideIndex = slideIndex - 1;
  if (previousSlideIndex < 0) {
    previousSlideIndex = sliders.length - 1;
  }
  slider.setAttribute("src", sliders[previousSlideIndex]);
};
