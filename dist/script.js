(() => {
  // script.js
  var baseHeader = "Explode/Assemble";
  var baseText = "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
  var dotTopHeader = document.querySelector(".dots_wrap-header");
  var dotTopText = document.querySelector(".dots_wrap-text");
  var allDots = document.querySelectorAll(".map_dot");
  var dotBtnContainer = document.querySelector(".btn-map-container");
  var explodeDotsWrapper = document.querySelector(".dots-all-wrapper.explode");
  var allDotAllWrappers = document.querySelectorAll(".dots-all-wrapper");
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
  allDots.forEach(function(el) {
    el.addEventListener("mouseover", function() {
      activeDotsWrap.querySelector(".dots_wrap-header").innerHTML = el.querySelector(".map_dot-name").innerHTML;
      activeDotsWrap.querySelector(".dots_wrap-text").innerHTML = el.querySelector(".map_dot-description").innerHTML;
    });
    el.addEventListener("mouseout", function() {
      activeDotsWrap.querySelector(".dots_wrap-header").innerHTML = baseHeader;
      activeDotsWrap.querySelector(".dots_wrap-text").innerHTML = baseText;
    });
  });
  dotBtnContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".button-vid");
    if (!clicked) return;
    if (clicked.classList.contains("datasheets")) {
      activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.add("active");
      return;
    }
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
    dotsFlag = clicked.classList[1];
    activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.remove("active");
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
      setTimeout(function() {
        activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.add("active");
      }, 25);
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
