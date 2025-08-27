(() => {
  // script.js
  var vidRotation = document.querySelector(".vid-rotation");
  var vidAllWrapFirst = document.querySelector(".vid-all-wrapper.first");
  var vidContentWrapFirst = document.querySelector(
    ".vid-content-wrapper.first"
  );
  var vidContentWrapSecond = document.querySelector(
    ".vid-content-wrapper.second"
  );
  var vidContentWrapThird = document.querySelector(
    ".vid-content-wrapper.third"
  );
  var vidView1 = document.querySelector(".vid-first");
  var vidView2 = document.querySelector(".vid-second");
  var vidView3 = document.querySelector(".vid-third");
  var allVidWrappers = document.querySelectorAll(".vid-all-wrapper");
  var allContentWrappers = document.querySelectorAll(".vid-content-wrapper");
  var allVids = document.querySelectorAll(".vid");
  var vidBtnContainer = document.querySelector(".btn-vid-container");
  var vidFlag;
  console.log("Aug 25, 2025-3:49");
  vidBtnContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".button-vid");
    if (!clicked) return;
    vidFlag = clicked.classList[1];
    console.log(vidFlag);
    setActiveVidAndPlay(vidFlag);
  });
  vidView1.addEventListener("ended", function() {
    console.log("video 1 has ended");
    vidContentWrapFirst.classList.add("active");
  });
  vidView2.addEventListener("ended", function() {
    console.log("video 2 has ended");
    vidContentWrapSecond.classList.add("active");
  });
  vidView3.addEventListener("ended", function() {
    console.log("video 3 has ended");
    vidContentWrapThird.classList.add("active");
  });
  var setActiveVidAndPlay = function(vidFlag2) {
    allContentWrappers.forEach(function(el) {
      el.classList.remove("active");
    });
    document.querySelector(`.vid-${vidFlag2}`).currentTime = 0;
    allVidWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(vidFlag2)) {
        el.classList.add("active");
      }
    });
    document.querySelector(`.vid-${vidFlag2}`).play();
  };
})();
