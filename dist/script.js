(() => {
  // script.js
  var dotBtnContainer = document.querySelector(".btn-map-container");
  var explodeDotsWrapper = document.querySelector(".dots-all-wrapper.explode");
  var allDotAllWrappers = document.querySelectorAll(".dots-all-wrapper");
  var allDotWrappers = document.querySelectorAll(".dots_wrap");
  var allVidWrappers = document.querySelectorAll(".video-wrapper");
  var vidExplode = document.querySelector(".vid-explode");
  var vidExplodeTablet = document.querySelector(".vid-explode.tablet");
  var vidExplodeMobileL = document.querySelector(".vid-explode.mobile-l");
  var vidExplodeMobileP = document.querySelector(".vid-explode.mobile-p");
  var vidAssemble = document.querySelector(".vid-assemble");
  var vidAssembleTablet = document.querySelector(".vid-assemble.tablet");
  var vidAssembleMobileL = document.querySelector(".vid-assemble.mobile-l");
  var vidAssembleMobileP = document.querySelector(".vid-assemble.mobile-p");
  var allDotVids = [vidExplode, vidAssemble];
  var allDotVidsTablet = [vidExplodeTablet, vidAssembleTablet];
  var allDotVidsMobileL = [vidExplodeMobileL, vidAssembleMobileL];
  var allDotVidsMobileP = [vidExplodeMobileP, vidAssembleMobileP];
  var dotExplodeButton = document.querySelector(".button-vid.explode");
  var dotAssembleButton = document.querySelector(".button-vid.assemble");
  var allDotButtons = [dotExplodeButton, dotAssembleButton];
  var activeDotsWrap = explodeDotsWrapper;
  var dotsFlag;
  dotBtnContainer.addEventListener("click", function(e) {
    allDotVids.forEach(function(el) {
      el.currentTime = 0;
    });
    allDotVidsTablet.forEach(function(el) {
      el.currentTime = 0;
    });
    allDotVidsMobileL.forEach(function(el) {
      el.currentTime = 0;
    });
    allDotVidsMobileP.forEach(function(el) {
      el.currentTime = 0;
    });
    const clicked = e.target.closest(".button-vid");
    dotsFlag = clicked.classList[1];
    if (!clicked) return;
    ToggleDotsImage(activeDotsWrap, false);
    PlayActiveDotsVideo();
  });
  allDotVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      const pastActiveDotsWrap = activeDotsWrap;
      if (activeDotsWrap.classList.contains("explode")) {
        SetActiveDotsWrapper("assemble");
      } else {
        SetActiveDotsWrapper("explode");
      }
      ToggleDotsImage(pastActiveDotsWrap, true);
      allDotButtons.forEach(function(el2) {
        el2.classList.remove("active");
        if (el2.classList.contains(dotsFlag)) {
          el2.classList.add("active");
        }
      });
      ToggleDotsImage(activeDotsWrap, true);
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
  var PlayActiveDotsVideo = function() {
    const vidArray = [
      document.querySelector(`.vid-${dotsFlag}`),
      document.querySelector(`.vid-${dotsFlag}.tablet`),
      document.querySelector(`.vid-${dotsFlag}.mobile-l`),
      document.querySelector(`.vid-${dotsFlag}.mobile-p`)
    ];
    vidArray.forEach((el) => el.play());
  };
  var ToggleDotsImage = function(activeImage, state) {
    const allActiveDotsImages = activeImage.querySelectorAll(".dots_wrap");
    allActiveDotsImages.forEach(function(el) {
      state ? el.classList.add("active") : el.classList.remove("active");
    });
  };
})();
