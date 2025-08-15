(() => {
  // script.js
  var lottie1 = document.querySelector(".lottie-wrapper.first");
  var lottie2 = document.querySelector(".lottie-wrapper.second");
  var lottie3 = document.querySelector(".lottie-wrapper.third");
  var button1 = document.querySelector(".button-lottie.first");
  var button2 = document.querySelector(".button-lottie.second");
  var button3 = document.querySelector(".button-lottie.third");
  var buttonTest = document.querySelector(".button-lottie.test");
  button1.addEventListener("click", function(e) {
    lottie1.classList.add("active");
    lottie2.classList.remove("active");
    lottie3.classList.remove("active");
  });
  button2.addEventListener("click", function(e) {
    lottie1.classList.remove("active");
    lottie2.classList.add("active");
    lottie3.classList.remove("active");
  });
  button3.addEventListener("click", function(e) {
    lottie1.classList.remove("active");
    lottie2.classList.remove("active");
    lottie3.classList.add("active");
  });
  buttonTest.addEventListener("click", function(e) {
    console.log("test clicked");
  });
})();
