(() => {
  // script.js
  var dotBtnContainer = document.querySelector(".btn-map-container");
  var allDotAllWrappers = document.querySelectorAll(".dots-all-wrapper");
  var vidExplode = document.querySelector(".vid-explode");
  var vidAssemble = document.querySelector(".vid-assemble");
  var allDotVids = [vidExplode, vidAssemble];
  var dotExplodeButton = document.querySelector(".button-vid.explode");
  var dotAssembleButton = document.querySelector(".button-vid.assemble");
  var allDotButtons = [dotExplodeButton, dotAssembleButton];
  var activeDotsWrap;
  var dotsFlag;
  dotBtnContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".button-vid");
    dotsFlag = clicked.classList[1];
    if (!clicked) return;
    vidExplode.currentTime = 0;
    vidAssemble.currentTime = 0;
    SetActiveDotsWrapper(dotsFlag);
    PlayActiveDotsVideo();
  });
  allDotVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      if (activeDotsWrap.classList.contains("explode")) {
        SetActiveDotsWrapper("assemble");
      } else {
        SetActiveDotsWrapper("explode");
      }
      allDotButtons.forEach(function(el2) {
        el2.classList.remove("active");
        if (el2.classList.contains(dotsFlag)) {
          el2.classList.add("active");
        }
      });
      ActivateDotsOrVideo("dots_wrap", "video-wrapper");
    });
  });
  var SetActiveDotsWrapper = function(value) {
    dotsFlag = value;
    allDotAllWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(dotsFlag)) {
        el.classList.add("active");
        activeDotsWrap = el;
      }
    });
  };
  var ActivateDotsOrVideo = function(activate, deactivate) {
    activeDotsWrap.querySelector(`.${activate}.${dotsFlag}`).classList.add("active");
    activeDotsWrap.querySelector(`.${deactivate}.${dotsFlag}`).classList.remove("active");
  };
  var PlayActiveDotsVideo = function() {
    ActivateDotsOrVideo("video-wrapper", "dots_wrap");
    document.querySelector(`.vid-${dotsFlag}`).play();
  };
})();
