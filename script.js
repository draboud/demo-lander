"use strict";

const lottieCTRLSpin = document.querySelector(".lottie-ctrl.spin");
const lottieCTRLLights = document.querySelector(".lottie-ctrl.lights");
const lottieCTRLVanish = document.querySelector(".lottie-ctrl.vanish");
const allLotties = document.querySelectorAll(".lottie-wrapper");
const allLottieContents = document.querySelectorAll(".lottie-content-wrapper");
const lottie1 = document.querySelector(".lottie-wrapper.first");
const lottieSpin = document.querySelector(".lottie-wrapper.spin");
const lottie2 = document.querySelector(".lottie-wrapper.second");
const lottie3 = document.querySelector(".lottie-wrapper.third");
const lottieThree = document.querySelector(".lottie-div.third");
const btnLottie = document.querySelector(".button-lottie");
const btn1 = document.querySelector(".btn-lottie.first");
const btn2 = document.querySelector(".btn-lottie.second");
const btn3 = document.querySelector(".btn-lottie.third");
const button1 = document.querySelector(".button-lottie.first");
const button2 = document.querySelector(".button-lottie.second");
const button3 = document.querySelector(".button-lottie.third");
const btnSpin = document.querySelector(".btn-lottie.spin");
const btnLights = document.querySelector(".btn-lottie.lights");
const btnVanish = document.querySelector(".btn-lottie.vanish");
const buttonContainer = document.querySelector(".btn-container");
let lottieFlag;
//...........................................................

console.log("Aug 22, 2025-3:41");

const mutationObserver = new MutationObserver((entries) => {
  const target = entries[entries.length - 1].target.classList[1];
  document.querySelector(`.btn-lottie.${target}`).click();
  buttonContainer.style["pointer-events"] = "auto";
});

mutationObserver.observe(lottieCTRLSpin, { attributes: true });
mutationObserver.observe(lottieCTRLLights, { attributes: true });
mutationObserver.observe(lottieCTRLVanish, { attributes: true });

buttonContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button-lottie");
  if (!clicked) return;
  lottieFlag = clicked.classList[1];
  SetActiveLottie(`${lottieFlag}`);
  document.querySelector(`.btn-lottie.${lottieFlag}`).click();
});
//...........................................................
const SetActiveLottie = function (activeLottie) {
  buttonContainer.style["pointer-events"] = "none";
  allLotties.forEach((el) => {
    el.classList.remove("active");
    el.style.opacity = "0";
    if (el.classList.contains(activeLottie)) {
      el.classList.add("active");
      el.style.opacity = "100";
    }
    allLottieContents.forEach((el) => {
      el.classList.remove("active");
      el.style.opacity = "0";
      if (el.classList.contains(activeLottie)) {
        el.classList.add("active");
      }
    });
  });
};
//...........................................................
//...........................................................
