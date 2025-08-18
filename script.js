const lottie1 = document.querySelector(".lottie-wrapper.first");
const lottieSpin = document.querySelector(".lottie-wrapper.spin");
const lottie2 = document.querySelector(".lottie-wrapper.second");
const lottie3 = document.querySelector(".lottie-wrapper.third");

const button1 = document.querySelector(".button-lottie.first");
const buttonSpin = document.querySelector(".button-lottie.spin");

const button2 = document.querySelector(".button-lottie.second");
const button3 = document.querySelector(".button-lottie.third");

const buttonTest = document.querySelector(".button-lottie.test");

const blackout = document.querySelector(".blackout");

button1.addEventListener("click", function (e) {
  // blackout.style.opacity = "100";
  lottie1.classList.add("active");
  lottieSpin.style.opacity = "0";
  lottie2.classList.remove("active");
  lottie3.classList.remove("active");
});
buttonSpin.addEventListener("click", function (e) {
  // blackout.style.opacity = "100";

  // lottie1.style.opacity = "0";
  lottieSpin.style.opacity = "100";
  lottie2.classList.remove("active");
  lottie3.classList.remove("active");
});

button2.addEventListener("click", function (e) {
  lottie1.classList.remove("active");
  lottie2.classList.add("active");
  lottie3.classList.remove("active");
});
button3.addEventListener("click", function (e) {
  console.log("roblox pvp bedwars");
  lottie1.classList.remove("active");
  lottie2.classList.remove("active");
  lottie3.classList.add("active");
});

buttonTest.addEventListener("click", function (e) {
  console.log("test clicked!");
});
