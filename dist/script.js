"use strict";
(() => {
  // script.js
  var lottieCTRLSpin = document.querySelector(".lottie-ctrl.spin");
  var lottieCTRLLights = document.querySelector(".lottie-ctrl.lights");
  var lottieCTRLVanish = document.querySelector(".lottie-ctrl.vanish");
  var allLotties = document.querySelectorAll(".lottie-wrapper");
  var allLottieContents = document.querySelectorAll(".lottie-content-wrapper");
  var lottie1 = document.querySelector(".lottie-wrapper.first");
  var lottieSpin = document.querySelector(".lottie-wrapper.spin");
  var lottie2 = document.querySelector(".lottie-wrapper.second");
  var lottie3 = document.querySelector(".lottie-wrapper.third");
  var lottieThree = document.querySelector(".lottie-div.third");
  var btnLottie = document.querySelector(".button-lottie");
  var btn1 = document.querySelector(".btn-lottie.first");
  var btn2 = document.querySelector(".btn-lottie.second");
  var btn3 = document.querySelector(".btn-lottie.third");
  var button1 = document.querySelector(".button-lottie.first");
  var button2 = document.querySelector(".button-lottie.second");
  var button3 = document.querySelector(".button-lottie.third");
  var btnSpin = document.querySelector(".btn-lottie.spin");
  var btnLights = document.querySelector(".btn-lottie.lights");
  var btnVanish = document.querySelector(".btn-lottie.vanish");
  var buttonContainer = document.querySelector(".btn-container");
  var lottieFlag;
  console.log("Aug 22, 2025-3:49");
  var mutationObserver = new MutationObserver((entries) => {
    const target = entries[entries.length - 1].target.classList[1];
    document.querySelector(`.btn-lottie.${target}`).click();
    buttonContainer.style["pointer-events"] = "auto";
  });
  mutationObserver.observe(lottieCTRLSpin, { attributes: true });
  mutationObserver.observe(lottieCTRLLights, { attributes: true });
  mutationObserver.observe(lottieCTRLVanish, { attributes: true });
  buttonContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".button-lottie");
    if (!clicked) return;
    lottieFlag = clicked.classList[1];
    SetActiveLottie(`${lottieFlag}`);
    document.querySelector(`.btn-lottie.${lottieFlag}`).click();
  });
  var SetActiveLottie = function(activeLottie) {
    buttonContainer.style["pointer-events"] = "none";
    allLotties.forEach((el) => {
      el.classList.remove("active");
      el.style.opacity = "0";
      if (el.classList.contains(activeLottie)) {
        el.classList.add("active");
        el.style.opacity = "100";
      }
      allLottieContents.forEach((el2) => {
        el2.classList.remove("active");
        el2.style.opacity = "0";
        if (el2.classList.contains(activeLottie)) {
          el2.classList.add("active");
        }
      });
    });
  };
})();
