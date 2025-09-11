// //...........................................................
// //VIDEO CHAINING
// const ctrlBtnWrapper = document.querySelector(".ctrl-btn-wrapper");
// const allChainDivs = document.querySelectorAll(".chain-vid-div");
// const allChainDivEnds = document.querySelectorAll(".chain-vid-div-end");
// const allChainVids = document.querySelectorAll(".chain-vid");
// const allChainVidEnds = document.querySelectorAll(".chain-vid-end");
// let chainVidFlag = "first";
// let endFlag = false;

// ctrlBtnWrapper.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".chain-btn");
//   chainVidFlag = clicked.classList[1];
//   ActivateEndChainVid();
// });
// allChainVidEnds.forEach(function (el) {
//   el.addEventListener("ended", function () {
//     ActivateStartChainVid();
//   });
// });
// const DeactivateAll = function () {
//   allChainDivs.forEach(function (el) {
//     el.classList.remove("active");
//   });
//   allChainDivEnds.forEach(function (el) {
//     el.classList.remove("active");
//   });
// };
// const ActivateStartChainVid = function () {
//   // DeactivateAll();
//   allChainDivs.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(chainVidFlag)) {
//       el.classList.add("active");
//       endFlag = chainVidFlag;
//       PlayChainVid(el.querySelector(".chain-vid"));
//     }
//   });
// };
// const ActivateEndChainVid = function () {
//   // DeactivateAll();
//   if (endFlag) {
//     allChainDivEnds.forEach(function (el) {
//       el.classList.remove("active");
//       if (el.classList.contains(endFlag)) {
//         el.classList.add("active");
//         PlayChainVid(el.querySelector(".chain-vid-end"));
//       }
//     });
//   } else {
//     ActivateStartChainVid();
//   }
// };
// const PlayChainVid = function (value) {
//   allChainVids.forEach(function (el) {
//     el.currentTime = 0;
//   });
//   value.play();
// };
//...........................................................
// //VIDEO
// const vidRotation = document.querySelector(".vid-rotation");
// const vidAllWrapFirst = document.querySelector(".vid-all-wrapper.first");
// const vidContentWrapFirst = document.querySelector(
//   ".vid-content-wrapper.first"
// );
// const vidContentWrapSecond = document.querySelector(
//   ".vid-content-wrapper.second"
// );
// const vidContentWrapThird = document.querySelector(
//   ".vid-content-wrapper.third"
// );
// const vidView1 = document.querySelector(".vid.first");
// const vidView2 = document.querySelector(".vid.second");
// const vidView3 = document.querySelector(".vid.third");
// const allVidAllWrappers = document.querySelectorAll(".vid-all-wrapper");
// const allContentWrappers = document.querySelectorAll(".vid-content-wrapper");
// const allVidWrappers = document.querySelectorAll(".vid-wrapper");
// const allVids = document.querySelectorAll(".vid");
// const allVidEndWrappers = document.querySelectorAll(".vid-end-wrapper");
// const vidBtnContainer = document.querySelector(".btn-vid-container");
// let vidFlag;
// let newTimer;

// vidBtnContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".button-vid");
//   if (!clicked) return;
//   vidFlag = clicked.classList[1];
//   SetActiveVidAndPlay(vidFlag);
// });

// vidView1.addEventListener("ended", function () {
//   vidContentWrapFirst.classList.add("active");
//   SetActiveEndVidAndPlay(vidFlag);
//   ReplayIntroVid();
// });

// vidView2.addEventListener("ended", function () {
//   vidContentWrapSecond.classList.add("active");
//   SetActiveEndVidAndPlay(vidFlag);
//   ReplayIntroVid();
// });

// vidView3.addEventListener("ended", function () {
//   vidContentWrapThird.classList.add("active");
//   SetActiveEndVidAndPlay(vidFlag);
//   ReplayIntroVid();
// });

// const SetActiveVidAndPlay = function (vidFlag) {
//   clearTimeout(newTimer);
//   allContentWrappers.forEach(function (el) {
//     el.classList.remove("active");
//     if (vidFlag === "rotation" && el.classList.contains("rotation")) {
//       el.classList.add("active");
//     }
//   });
//   allVids.forEach(function (el) {
//     el.currentTime = 0;
//   });
//   allVidEndWrappers.forEach(function (el) {
//     el.classList.remove("active");
//   });
//   allVidAllWrappers.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(vidFlag)) {
//       el.classList.add("active");
//     }
//   });
//   allVidWrappers.forEach(function (el) {
//     el.classList.add("active");
//   });
//   document.querySelector(`.vid.${vidFlag}`).play();
// };

// const SetActiveEndVidAndPlay = function (vidFlag) {
//   allVidWrappers.forEach(function (el) {
//     el.classList.remove("active");
//   });
//   allVidEndWrappers.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(vidFlag)) {
//       el.classList.add("active");
//     }
//     document.querySelector(`.vid.end.${vidFlag}`).play();
//   });
// };

// const ReplayIntroVid = function () {
//   newTimer = setTimeout(() => {
//     SetActiveVidAndPlay("rotation");
//   }, 3000);
// };
//...........................................................
//MAP DOTS
const blackout = document.querySelector(".blackout");
const dotBtnContainer = document.querySelector(".btn-map-container");
const explodeDotsWrapper = document.querySelector(".dots-all-wrapper.explode");
const allDotAllWrappers = document.querySelectorAll(".dots-all-wrapper");
const allDotWrappers = document.querySelectorAll(".dots_wrap");
const allVidWrappers = document.querySelectorAll(".video-wrapper");
const vidExplode = document.querySelector(".vid-explode");
const vidExplodeMobile = document.querySelector(".vid-explode.mobile");
const vidAssemble = document.querySelector(".vid-assemble");
const vidAssembleMobile = document.querySelector(".vid-assemble.mobile");
const allDotVids = [vidExplode, vidAssemble];
const dotExplodeButton = document.querySelector(".button-vid.explode");
const dotAssembleButton = document.querySelector(".button-vid.assemble");
const allDotButtons = [dotExplodeButton, dotAssembleButton];
let activeDotsWrap = explodeDotsWrapper;
let dotsFlag;

dotBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button-vid");
  dotsFlag = clicked.classList[1];
  if (!clicked) return;
  FlashBlackout();
  PlayActiveDotsVideo();
});
allDotVids.forEach(function (el) {
  el.addEventListener("ended", function () {
    if (activeDotsWrap.classList.contains("explode")) {
      SetActiveDotsWrapper("assemble");
    } else {
      SetActiveDotsWrapper("explode");
    }
    allDotButtons.forEach(function (el) {
      el.classList.remove("active");
      if (el.classList.contains(dotsFlag)) {
        el.classList.add("active");
      }
    });
    ActivateDotsOrVideo("dots_wrap", "video-wrapper");
  });
});
const SetActiveDotsWrapper = function (value) {
  dotsFlag = value;
  allDotAllWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(dotsFlag)) {
      el.classList.add("active");
      activeDotsWrap = el;
    }
  });
};
const ActivateDotsOrVideo = function (activate, deactivate) {
  activeDotsWrap
    .querySelector(`.${activate}.${dotsFlag}`)
    .classList.add("active");
  activeDotsWrap
    .querySelector(`.${activate}.${dotsFlag}.mobile`)
    .classList.add("active");
  activeDotsWrap
    .querySelector(`.${deactivate}.${dotsFlag}`)
    .classList.remove("active");
  activeDotsWrap
    .querySelector(`.${deactivate}.${dotsFlag}.mobile`)
    .classList.remove("active");
};
const PlayActiveDotsVideo = function () {
  ActivateDotsOrVideo("video-wrapper", "dots_wrap");
  document.querySelector(`.vid-${dotsFlag}`).play();
  document.querySelector(`.vid-${dotsFlag}.mobile`).play();
};

const FlashBlackout = function () {
  blackout.classList.remove("off");
  setTimeout(function () {
    blackout.classList.add("off"), 10;
  });
};
//...........................................................
//SIZING & SNAPING
// const vidSection = document.querySelector(".section_spacing");
// const contactSection = document.querySelector(".section_contact.snap");
// const btnScroll1 = document.querySelector(".button-scroll.scroll1");
// const btnScroll2 = document.querySelector(".button-scroll.scroll2");
// const sectionFeatures = document.querySelector(".section_action.features");
// const sectionExplode = document.querySelector(".section_action.explode");
// const allSections = document.querySelectorAll(".section_action");
// const allNavLinks = document.querySelectorAll(".mini-nav-link");
// const allNavLinksTouch = document.querySelectorAll(".mini-nav-link-touch");
// const allCtrlBtns = document.querySelectorAll(".ctrl-btn");
// const mainWrapper = document.querySelector(".main-wrapper");
// const testDiv = document.querySelector(".test-div");
// let startY;
// let endY;
// let activeSection = "features";
//...........................................................
//NAVIGATION
// const miniNav = document.querySelector(".mini-nav-wrapper");
// const miniNavTouch = document.querySelector(".mini-nav-wrapper.touch");
// const miniNavLink = document.querySelector(".mini-nav-link");
// const miniNavLinkTouch = document.querySelector(".mini-nav-link-touch");
// const buttonWrapper = document.querySelector(".ctrl-btn-wrapper");
// const activeNav = document.querySelector(".active-nav");
// const activeNavTouch = document.querySelector(".active-nav.touch");
// let usingTouch = false;

// miniNavTouch.addEventListener("click", function () {
//   miniNavTouch.style.height = "auto";
//   activeNavTouch.style.display = "none";
//   allNavLinksTouch.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(activeSection)) {
//       el.classList.add("active");
//     }
//     el.style["pointer-events"] = "none";
//     setTimeout(() => (el.style["pointer-events"] = "auto"), 100);
//     el.style.display = "block";
//   });
// });

// miniNav.addEventListener("mouseenter", function () {
//   miniNav.style.height = "auto";
//   activeNav.style.display = "none";
//   allNavLinks.forEach(function (el) {
//     el.style["pointer-events"] = "none";
//     setTimeout(() => (el.style["pointer-events"] = "auto"), 100);
//     el.style.display = "block";
//   });
// });
// miniNav.addEventListener("mouseleave", function () {
//   miniNav.style.height = "2.6rem";
//   activeNav.style.display = "block";
//   miniNavLink.style.display = "none";
// });

// miniNav.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".mini-nav-link");
//   if (!clicked) return;
//   activeSection = clicked.classList[1];
//   setActiveSectionLinkBtns(activeSection);
// });
// miniNavTouch.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".mini-nav-link-touch");
//   if (!clicked) return;
//   activeSection = clicked.classList[1];
//   setActiveSectionLinkBtns(activeSection);
// });
// buttonWrapper.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".ctrl-btn");
//   if (!clicked) return;
//   console.log(clicked);
// });

// const setActiveSectionLinkBtns = function (section) {
//   activeNav.innerHTML = section;
//   activeNavTouch.innerHTML = section;
//   allNavLinks.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(section)) {
//       el.classList.add("active");
//     }
//     miniNav.style.height = "2.6rem";
//     activeNav.style.display = "block";
//   });
//   allNavLinksTouch.forEach(function (el) {
//     el.style.display = "none";
//     el.classList.remove("active");
//     if (el.classList.contains(section)) {
//       el.classList.add("active");
//     }
//   });
//   miniNavTouch.style.height = "2.6rem";
//   activeNavTouch.style.display = "block";

//   allSections.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(section)) {
//       el.classList.add("active");
//     }
//   });
//   allCtrlBtns.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(section)) {
//       el.classList.add("active");
//     }
//   });
// };
// //...........................................................
// sectionFeatures.addEventListener("wheel", function (e) {
//   if (e.deltaY > 0) {
//     setActiveSectionLinkBtns("explode");
//   }
// });
// sectionFeatures.addEventListener("touchstart", function (e) {
//   startY = e.changedTouches[0].screenY;
// });
// sectionFeatures.addEventListener("touchend", function (e) {
//   endY = e.changedTouches[0].screenY;
//   if (endY < startY) {
//     activeSection = "explode";
//     setActiveSectionLinkBtns(activeSection);
//   } else if (endY > startY) {
//     activeSection = "features";
//     setActiveSectionLinkBtns(activeSection);
//   }
// });
// sectionExplode.addEventListener("wheel", function (e) {
//   if (e.deltaY < 0) {
//     activeSection = "features";
//     setActiveSectionLinkBtns(activeSection);
//   }
// });
// sectionExplode.addEventListener("touchstart", function (e) {
//   startY = e.changedTouches[0].screenY;
// });
// sectionExplode.addEventListener("touchend", function (e) {
//   endY = e.changedTouches[0].screenY;
//   if (endY > startY) {
//     activeSection = "features";
//     setActiveSectionLinkBtns(activeSection);
//   } else if (endY < startY) {
//     activeSection = "explode";
//     setActiveSectionLinkBtns(activeSection);
//   }
// });
// //...........................................................
