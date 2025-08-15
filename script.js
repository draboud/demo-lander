const lottie1 = document.querySelector(".lottie-wrapper.first");
// const lottie1B = document.querySelector(".lottie-wrapper.first-b");
const lottie2 = document.querySelector(".lottie-wrapper.second");
const lottie3 = document.querySelector(".lottie-wrapper.third");
const button1 = document.querySelector(".button-lottie.first");
const button2 = document.querySelector(".button-lottie.second");
const button3 = document.querySelector(".button-lottie.third");
const buttonTest = document.querySelector(".button-lottie.test");

button1.addEventListener("click", function (e) {
  lottie1.classList.add("active");
  lottie2.classList.remove("active");
  lottie3.classList.remove("active");
});
button2.addEventListener("click", function (e) {
  lottie1.classList.remove("active");
  lottie2.classList.add("active");
  lottie3.classList.remove("active");
});
button3.addEventListener("click", function (e) {
  lottie1.classList.remove("active");
  lottie2.classList.remove("active");
  lottie3.classList.add("active");
});

buttonTest.addEventListener("click", function (e) {
  console.log("test clicked");
});
