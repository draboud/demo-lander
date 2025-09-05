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
  var vidView1 = document.querySelector(".vid.first");
  var vidView2 = document.querySelector(".vid.second");
  var vidView3 = document.querySelector(".vid.third");
  var allVidAllWrappers = document.querySelectorAll(".vid-all-wrapper");
  var allContentWrappers = document.querySelectorAll(".vid-content-wrapper");
  var allVidWrappers = document.querySelectorAll(".vid-wrapper");
  var allVids = document.querySelectorAll(".vid");
  var allVidEndWrappers = document.querySelectorAll(".vid-end-wrapper");
  var vidBtnContainer = document.querySelector(".btn-vid-container");
  var vidFlag;
  var newTimer;
  var mapBtnContainer = document.querySelector(".btn-map-container");
  var vidExplodeWrapper = document.querySelector(".vid-explode-wrapper");
  var vidAssembleWrapper = document.querySelector(".vid-assemble-wrapper");
  var vidExplode = document.querySelector(".vid-explode");
  var vidAssemble = document.querySelector(".vid-assemble");
  var textExplode = document.querySelector(".text.explode");
  var textAssemble = document.querySelector(".text.assemble");
  var dotsExplodeWrapper = document.querySelector(".dots-explode-wrapper");
  var dotsAssembleWrapper = document.querySelector(".dots-assemble-wrapper");
  var explodeFlag = false;
  console.log("testing 18!");
  var vidSection = document.querySelector(".section_spacing");
  var contactSection = document.querySelector(".section_contact.snap");
  var btnScroll1 = document.querySelector(".button-scroll.scroll1");
  var btnScroll2 = document.querySelector(".button-scroll.scroll2");
  var sectionFeatures = document.querySelector(".section_action.features");
  var sectionExplode = document.querySelector(".section_action.explode");
  var allSections = document.querySelectorAll(".section_action");
  var allNavLinks = document.querySelectorAll(".mini-nav-link");
  var allNavLinksTouch = document.querySelectorAll(".mini-nav-link-touch");
  var allCtrlBtns = document.querySelectorAll(".ctrl-btn");
  var mainWrapper = document.querySelector(".main-wrapper");
  var testDiv = document.querySelector(".test-div");
  var startY;
  var endY;
  var activeSection = "features";
  var miniNav = document.querySelector(".mini-nav-wrapper");
  var miniNavTouch = document.querySelector(".mini-nav-wrapper.touch");
  var miniNavLink = document.querySelector(".mini-nav-link");
  var miniNavLinkTouch = document.querySelector(".mini-nav-link-touch");
  var buttonWrapper = document.querySelector(".ctrl-btn-wrapper");
  var activeNav = document.querySelector(".active-nav");
  var activeNavTouch = document.querySelector(".active-nav.touch");
  miniNavTouch.addEventListener("click", function() {
    miniNavTouch.style.height = "auto";
    activeNavTouch.style.display = "none";
    allNavLinksTouch.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(activeSection)) {
        el.classList.add("active");
      }
      el.style["pointer-events"] = "none";
      setTimeout(() => el.style["pointer-events"] = "auto", 100);
      el.style.display = "block";
    });
  });
  miniNav.addEventListener("mouseenter", function() {
    miniNav.style.height = "auto";
    activeNav.style.display = "none";
    allNavLinks.forEach(function(el) {
      el.style["pointer-events"] = "none";
      setTimeout(() => el.style["pointer-events"] = "auto", 100);
      el.style.display = "block";
    });
  });
  miniNav.addEventListener("mouseleave", function() {
    miniNav.style.height = "2.6rem";
    activeNav.style.display = "block";
    miniNavLink.style.display = "none";
  });
  miniNav.addEventListener("click", function(e) {
    const clicked = e.target.closest(".mini-nav-link");
    if (!clicked) return;
    activeSection = clicked.classList[1];
    setActiveSectionLinkBtns(activeSection);
  });
  miniNavTouch.addEventListener("click", function(e) {
    const clicked = e.target.closest(".mini-nav-link-touch");
    if (!clicked) return;
    activeSection = clicked.classList[1];
    setActiveSectionLinkBtns(activeSection);
  });
  buttonWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".ctrl-btn");
    if (!clicked) return;
    console.log(clicked);
  });
  var setActiveSectionLinkBtns = function(section) {
    activeNav.innerHTML = section;
    activeNavTouch.innerHTML = section;
    allNavLinks.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(section)) {
        el.classList.add("active");
      }
      miniNav.style.height = "2.6rem";
      activeNav.style.display = "block";
    });
    allNavLinksTouch.forEach(function(el) {
      el.style.display = "none";
    });
    miniNavTouch.style.height = "2.6rem";
    activeNavTouch.style.display = "block";
    allSections.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(section)) {
        el.classList.add("active");
      }
    });
    allCtrlBtns.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(section)) {
        el.classList.add("active");
      }
    });
  };
  sectionFeatures.addEventListener("wheel", function(e) {
    if (e.deltaY > 0) {
      setActiveSectionLinkBtns("explode");
    }
  });
  sectionFeatures.addEventListener("touchstart", function(e) {
    startY = e.changedTouches[0].screenY;
  });
  sectionFeatures.addEventListener("touchend", function(e) {
    endY = e.changedTouches[0].screenY;
    if (endY < startY) {
      setActiveSectionLinkBtns("explode");
    } else if (endY > startY) {
      setActiveSectionLinkBtns("features");
    }
  });
  sectionExplode.addEventListener("wheel", function(e) {
    if (e.deltaY < 0) {
      setActiveSectionLinkBtns("features");
    }
  });
  sectionExplode.addEventListener("touchstart", function(e) {
    startY = e.changedTouches[0].screenY;
  });
  sectionExplode.addEventListener("touchend", function(e) {
    endY = e.changedTouches[0].screenY;
    if (endY > startY) {
      setActiveSectionLinkBtns("features");
    } else if (endY < startY) {
      setActiveSectionLinkBtns("explode");
    }
  });
  mapBtnContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".button-vid");
    if (!clicked) return;
    vidExplode.currentTime = 0;
    vidAssemble.currentTime = 0;
    explodeFlag ? assembleFunction() : explodeFunction();
  });
  var explodeFunction = function() {
    mapBtnContainer.style["pointer-events"] = "none";
    explodeFlag = true;
    dotsExplodeWrapper.classList.remove("active");
    vidExplodeWrapper.classList.add("active");
    vidAssembleWrapper.classList.remove("active");
    vidExplode.play();
    textExplode.style.display = "none";
    textAssemble.style.display = "block";
  };
  var assembleFunction = function() {
    mapBtnContainer.style["pointer-events"] = "none";
    explodeFlag = false;
    dotsAssembleWrapper.classList.remove("active");
    vidAssembleWrapper.classList.add("active");
    vidExplodeWrapper.classList.remove("active");
    vidAssemble.play();
    textAssemble.style.display = "none";
    textExplode.style.display = "block";
  };
  vidExplode.addEventListener("ended", function() {
    mapBtnContainer.style["pointer-events"] = "auto";
    dotsAssembleWrapper.classList.add("active");
  });
  vidAssemble.addEventListener("ended", function() {
    mapBtnContainer.style["pointer-events"] = "auto";
    dotsExplodeWrapper.classList.add("active");
  });
  vidBtnContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".button-vid");
    if (!clicked) return;
    vidFlag = clicked.classList[1];
    setActiveVidAndPlay(vidFlag);
  });
  vidView1.addEventListener("ended", function() {
    vidContentWrapFirst.classList.add("active");
    setActiveEndVidAndPlay(vidFlag);
    ReplayIntroVid();
  });
  vidView2.addEventListener("ended", function() {
    vidContentWrapSecond.classList.add("active");
    setActiveEndVidAndPlay(vidFlag);
    ReplayIntroVid();
  });
  vidView3.addEventListener("ended", function() {
    vidContentWrapThird.classList.add("active");
    setActiveEndVidAndPlay(vidFlag);
    ReplayIntroVid();
  });
  var setActiveVidAndPlay = function(vidFlag2) {
    clearTimeout(newTimer);
    allContentWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (vidFlag2 === "rotation") {
        el.classList.add("active");
      }
    });
    allVids.forEach(function(el) {
      el.currentTime = 0;
    });
    allVidEndWrappers.forEach(function(el) {
      el.classList.remove("active");
    });
    allVidAllWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(vidFlag2)) {
        el.classList.add("active");
      }
    });
    allVidWrappers.forEach(function(el) {
      el.classList.add("active");
    });
    document.querySelector(`.vid.${vidFlag2}`).play();
  };
  var setActiveEndVidAndPlay = function(vidFlag2) {
    allVidWrappers.forEach(function(el) {
      el.classList.remove("active");
    });
    allVidEndWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(vidFlag2)) {
        el.classList.add("active");
      }
      document.querySelector(`.vid.end.${vidFlag2}`).play();
    });
  };
  var ReplayIntroVid = function() {
    newTimer = setTimeout(() => {
      setActiveVidAndPlay("rotation");
    }, 3e3);
  };
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
