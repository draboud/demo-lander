(() => {
  // script.js
  var blackout = document.querySelector(".blackout");
  var dotBtnContainer = document.querySelector(".btn-map-container");
  var explodeDotsWrapper = document.querySelector(".dots-all-wrapper.explode");
  var allDotAllWrappers = document.querySelectorAll(".dots-all-wrapper");
  var allDotWrappers = document.querySelectorAll(".dots_wrap");
  var allVidWrappers = document.querySelectorAll(".video-wrapper");
  var vidExplode = document.querySelector(".vid-explode");
  var vidExplodeMobile = document.querySelector(".vid-explode.mobile");
  var vidAssemble = document.querySelector(".vid-assemble");
  var vidAssembleMobile = document.querySelector(".vid-assemble.mobile");
  var allDotVids = [vidExplode, vidAssemble];
  var dotExplodeButton = document.querySelector(".button-vid.explode");
  var dotAssembleButton = document.querySelector(".button-vid.assemble");
  var allDotButtons = [dotExplodeButton, dotAssembleButton];
  var activeDotsWrap = explodeDotsWrapper;
  var dotsFlag;
  dotBtnContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".button-vid");
    dotsFlag = clicked.classList[1];
    if (!clicked) return;
    FlashBlackout();
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
    activeDotsWrap.querySelector(`.${activate}.${dotsFlag}.mobile`).classList.add("active");
    activeDotsWrap.querySelector(`.${deactivate}.${dotsFlag}`).classList.remove("active");
    activeDotsWrap.querySelector(`.${deactivate}.${dotsFlag}.mobile`).classList.remove("active");
  };
  var PlayActiveDotsVideo = function() {
    ActivateDotsOrVideo("video-wrapper", "dots_wrap");
    document.querySelector(`.vid-${dotsFlag}`).play();
    document.querySelector(`.vid-${dotsFlag}.mobile`).play();
  };
  var FlashBlackout = function() {
    blackout.classList.remove("off");
    setTimeout(function() {
      blackout.classList.add("off"), 10;
    });
  };
})();
