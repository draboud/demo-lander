(() => {
  // script.js
  var lottie1 = document.querySelector(".lottie-wrapper.first");
  var lottieSpin = document.querySelector(".lottie-wrapper.spin");
  var lottie2 = document.querySelector(".lottie-wrapper.second");
  var lottie3 = document.querySelector(".lottie-wrapper.third");
  var button1 = document.querySelector(".button-lottie.first");
  var buttonSpin = document.querySelector(".button-lottie.spin");
  var button2 = document.querySelector(".button-lottie.second");
  var button3 = document.querySelector(".button-lottie.third");
  var buttonTest = document.querySelector(".button-lottie.test");
  var blackout = document.querySelector(".blackout");
  button1.addEventListener("click", function(e) {
    lottie1.classList.add("active");
    lottieSpin.style.opacity = "0";
    lottie2.classList.remove("active");
    lottie3.classList.remove("active");
  });
  buttonSpin.addEventListener("click", function(e) {
    lottieSpin.style.opacity = "100";
    lottie2.classList.remove("active");
    lottie3.classList.remove("active");
  });
  button2.addEventListener("click", function(e) {
    lottie1.classList.remove("active");
    lottie2.classList.add("active");
    lottie3.classList.remove("active");
  });
  button3.addEventListener("click", function(e) {
    console.log("roblox pvp bedwars");
    lottie1.classList.remove("active");
    lottie2.classList.remove("active");
    lottie3.classList.add("active");
  });
  buttonTest.addEventListener("click", function(e) {
    console.log("test clicked!");
  });
})();
