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
  vidBtnContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".button-vid");
    if (!clicked) return;
    vidFlag = clicked.classList[1];
    SetActiveVidAndPlay(vidFlag);
  });
  vidView1.addEventListener("ended", function() {
    vidContentWrapFirst.classList.add("active");
    SetActiveEndVidAndPlay(vidFlag);
    ReplayIntroVid();
  });
  vidView2.addEventListener("ended", function() {
    vidContentWrapSecond.classList.add("active");
    SetActiveEndVidAndPlay(vidFlag);
    ReplayIntroVid();
  });
  vidView3.addEventListener("ended", function() {
    vidContentWrapThird.classList.add("active");
    SetActiveEndVidAndPlay(vidFlag);
    ReplayIntroVid();
  });
  var SetActiveVidAndPlay = function(vidFlag2) {
    clearTimeout(newTimer);
    allContentWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (vidFlag2 === "rotation" && el.classList.contains("rotation")) {
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
  var SetActiveEndVidAndPlay = function(vidFlag2) {
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
      SetActiveVidAndPlay("rotation");
    }, 3e3);
  };
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
      el.classList.remove("active");
      if (el.classList.contains(section)) {
        el.classList.add("active");
      }
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
      activeSection = "explode";
      setActiveSectionLinkBtns(activeSection);
    } else if (endY > startY) {
      activeSection = "features";
      setActiveSectionLinkBtns(activeSection);
    }
  });
  sectionExplode.addEventListener("wheel", function(e) {
    if (e.deltaY < 0) {
      activeSection = "features";
      setActiveSectionLinkBtns(activeSection);
    }
  });
  sectionExplode.addEventListener("touchstart", function(e) {
    startY = e.changedTouches[0].screenY;
  });
  sectionExplode.addEventListener("touchend", function(e) {
    endY = e.changedTouches[0].screenY;
    if (endY > startY) {
      activeSection = "features";
      setActiveSectionLinkBtns(activeSection);
    } else if (endY < startY) {
      activeSection = "explode";
      setActiveSectionLinkBtns(activeSection);
    }
  });
})();
