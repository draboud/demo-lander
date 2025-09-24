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
const sectionMapDots = document.querySelector(".section_map-dots");
const allDatasheetButtons = document.querySelectorAll(".button-datasheet");
const baseHeader = "Explode/Assemble";
const baseText =
  "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
const dotTopContentWrapper = document.querySelector(".dots_wrap-top-wrapper");
const allDotTopContentWrappers = document.querySelectorAll(
  ".dots_wrap-top-wrapper"
);
const dotTopHeader = document.querySelector(".dots_wrap-header");
const dotTopText = document.querySelector(".dots_wrap-text");
const allDots = document.querySelectorAll(".map_dot");
const dotBtnContainer = document.querySelector(".btn-map-container");
const explodeDotsWrapper = document.querySelector(".dots-all-wrapper.explode");
const allDotAllWrappers = document.querySelectorAll(".dots-all-wrapper");
const vidExplode = document.querySelector(".vid-explode");
const vidExplodeTablet = document.querySelector(".vid-explode.tablet");
const vidExplodeMobileL = document.querySelector(".vid-explode.mobile-l");
const vidExplodeMobileP = document.querySelector(".vid-explode.mobile-p");
const vidAssemble = document.querySelector(".vid-assemble");
const vidAssembleTablet = document.querySelector(".vid-assemble.tablet");
const vidAssembleMobileL = document.querySelector(".vid-assemble.mobile-l");
const vidAssembleMobileP = document.querySelector(".vid-assemble.mobile-p");
const allDotVids = [vidExplode, vidAssemble];
const allDotVidsTablet = [vidExplodeTablet, vidAssembleTablet];
const allDotVidsMobileL = [vidExplodeMobileL, vidAssembleMobileL];
const allDotVidsMobileP = [vidExplodeMobileP, vidAssembleMobileP];
const dotExplodeButton = document.querySelector(".button-vid.explode");
const dotAssembleButton = document.querySelector(".button-vid.assemble");
const allDotButtons = [dotExplodeButton, dotAssembleButton];
let activeDotsWrap = explodeDotsWrapper;
let dotsFlag;
let datasheetButtonTimer;
let explodeOrAssemble;
let compNumberString;

allDatasheetButtons.forEach(function (el) {
  el.addEventListener("click", function () {
    explodeOrAssemble = el.parentElement.parentElement.classList[1];
    const compNumber =
      el.parentElement.querySelector(".dots_wrap-header").innerHTML;
    if (compNumber.length > 11) {
      compNumberString = `comp-${compNumber.slice(-2)}`;
    } else {
      compNumberString = `comp-${compNumber[compNumber.length - 1]}`;
    }
    OpenDataSheet(compNumberString, explodeOrAssemble);
  });
});
allDotTopContentWrappers.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    clearTimeout(datasheetButtonTimer);
  });
  el.addEventListener("mouseout", function () {
    datasheetButtonTimer = setTimeout(function () {
      ResetTopWrapperContent();
    }, 1500);
  });
});
allDots.forEach(function (el) {
  el.addEventListener("click", function () {
    activeDotsWrap
      .querySelector(".dots_wrap-top-wrapper")
      .classList.remove("active");
    setTimeout(function () {
      activeDotsWrap
        .querySelector(".dots_wrap-top-wrapper")
        .classList.add("active");
    }, 25);
    activeDotsWrap.querySelector(".dots_wrap-header").innerHTML =
      el.querySelector(".map_dot-name").innerHTML;
    activeDotsWrap.querySelector(".dots_wrap-text").innerHTML =
      el.querySelector(".map_dot-description").innerHTML;
    activeDotsWrap.querySelector(".button-datasheet").classList.add("active");
  });
  el.addEventListener("mouseover", function () {
    clearTimeout(datasheetButtonTimer);
  });
  el.addEventListener("mouseout", function () {
    datasheetButtonTimer = setTimeout(function () {
      ResetTopWrapperContent();
    }, 1500);
  });
});
dotBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button-vid");
  if (!clicked) return;
  if (clicked.classList.contains("datasheets")) {
    activeDotsWrap
      .querySelector(".dots_wrap-top-wrapper")
      .classList.add("active");
    return;
  }
  allDotVids.forEach(function (el) {
    el.currentTime = 0;
  });
  allDotVidsTablet.forEach(function (el) {
    el.currentTime = 0;
  });
  allDotVidsMobileL.forEach(function (el) {
    el.currentTime = 0;
  });
  allDotVidsMobileP.forEach(function (el) {
    el.currentTime = 0;
  });
  dotsFlag = clicked.classList[1];
  activeDotsWrap
    .querySelector(".dots_wrap-top-wrapper")
    .classList.remove("active");
  ToggleDotsImage(activeDotsWrap, false);
  ResetTopWrapperContent();
  PlayActiveDotsVideo();
});
allDotVids.forEach(function (el) {
  el.addEventListener("ended", function () {
    const pastActiveDotsWrap = activeDotsWrap;
    if (activeDotsWrap.classList.contains("explode")) {
      SetActiveDotsWrapper("assemble");
    } else {
      SetActiveDotsWrapper("explode");
    }
    ToggleDotsImage(pastActiveDotsWrap, true);
    allDotButtons.forEach(function (el) {
      el.classList.remove("active");
      if (el.classList.contains(dotsFlag)) {
        el.classList.add("active");
      }
    });
    ToggleDotsImage(activeDotsWrap, true);
    setTimeout(function () {
      activeDotsWrap
        .querySelector(".dots_wrap-top-wrapper")
        .classList.add("active");
    }, 25);
  });
});
const ResetTopWrapperContent = function () {
  activeDotsWrap.querySelector(".dots_wrap-header").innerHTML = baseHeader;
  activeDotsWrap.querySelector(".dots_wrap-text").innerHTML = baseText;
  activeDotsWrap.querySelector(".button-datasheet").classList.remove("active");
};
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
const PlayActiveDotsVideo = function () {
  const vidArray = [
    document.querySelector(`.vid-${dotsFlag}`),
    document.querySelector(`.vid-${dotsFlag}.tablet`),
    document.querySelector(`.vid-${dotsFlag}.mobile-l`),
    document.querySelector(`.vid-${dotsFlag}.mobile-p`),
  ];
  vidArray.forEach((el) => el.play());
};
const ToggleDotsImage = function (activeImage, state) {
  const allActiveDotsImages = activeImage.querySelectorAll(".dots_wrap");
  allActiveDotsImages.forEach(function (el) {
    state ? el.classList.add("active") : el.classList.remove("active");
  });
};
//...........................................................
const OpenDataSheet = function (value, explodeOrAssemble) {
  FlashBlackout();
  sectionMapDots.classList.remove("active");
  sectionDataZooms.classList.add("active");
  document.querySelector(`.datasheet-card-wrapper.${value}`).click();
  backButton.classList.add("active");
};
const FlashBlackout = function () {
  blackout.classList.remove("off");
  setTimeout(function () {
    blackout.classList.add("off");
  }, 5);
};
//...........................................................
//DATAZOOMS
const backButton = document.querySelector(".ctrl-btn.datazoom.back");
const sectionDataZooms = document.querySelector(".section_datasheets");
const dataZoomButtonWrapper = document.querySelector(
  ".ctrl-btn-wrapper.datazooms"
);
const datasheetsAllWrapper = document.querySelector(".datasheets-all-wrapper");
const allDataZoomWrappers = document.querySelectorAll(
  ".datazooms-comp-wrapper"
);
const allDataZoomVids = document.querySelectorAll(".datazoom-vid");
let activeDataZoomComp;
const allTextImageButtons = document.querySelectorAll(".text-image-btn");
const allDataZoomSubHeadings = document.querySelectorAll(
  ".datazoom-subheading"
);
const allDataZoomText = document.querySelectorAll(".datazoom-text");
let imageTextFlag = "text";

dataZoomButtonWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".ctrl-btn");
  if (!clicked) return;
  if (clicked.classList.contains("back")) {
    ReturnToExplodeAssemble();
  } else {
    document
      .querySelector(".ctrl-btn.datazoom.back")
      .classList.remove("active");
    imageTextFlag = "text";
    allTextImageButtons.forEach(
      (el) => (el.querySelector(".text-image-btn-text").innerHTML = "image")
    );
    allDataZoomSubHeadings.forEach((el) => el.classList.add("active"));
    allDataZoomText.forEach((el) => el.classList.add("active"));
    allDataZoomWrappers.forEach(function (el) {
      el.classList.remove("active");
      el.querySelector(".datazoom-content-wrapper").classList.remove("active");
      el.querySelector(".dimmer").classList.add("off");
      el.querySelectorAll(".datazoom-image").forEach((el2) =>
        el2.classList.remove("active")
      );
    });
    allDataZoomVids.forEach(function (el) {
      el.currentTime = 0;
    });
    datasheetsAllWrapper.style.display = "grid";
    setTimeout(function () {
      datasheetsAllWrapper.classList.add("active");
    }, 25);
    dataZoomButtonWrapper.classList.remove("active");
  }
});
datasheetsAllWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".datasheet-card-wrapper");
  if (!clicked) return;
  allDataZoomVids.forEach(function (el) {
    el.currentTime = 0;
  });
  ActivateDataZoomWrapper(clicked.classList[1]);
});
allDataZoomVids.forEach(function (el) {
  el.addEventListener("ended", function () {
    activeDataZoomComp.querySelector(".dimmer").classList.remove("off");
    activeDataZoomComp
      .querySelectorAll(".datazoom-image")
      .forEach((el2) => el2.classList.add("active"));
    activeDataZoomComp
      .querySelector(".datazoom-content-wrapper")
      .classList.add("active");
    dataZoomButtonWrapper.classList.add("active");
  });
});
allTextImageButtons.forEach(function (el) {
  el.addEventListener("click", function () {
    el.querySelector(".text-image-btn-text").innerHTML = imageTextFlag;
    imageTextFlag === "text"
      ? (imageTextFlag = "image")
      : (imageTextFlag = "text");
    el.parentElement.parentElement
      .querySelectorAll(".datazoom-subheading")
      .forEach((el2) => el2.classList.toggle("active"));
    el.parentElement.parentElement
      .querySelectorAll(".datazoom-text")
      .forEach((el3) => el3.classList.toggle("active"));
    imageTextFlag === "image"
      ? el.parentElement.parentElement.parentElement
          .querySelector(".dimmer")
          .classList.add("off")
      : el.parentElement.parentElement.parentElement
          .querySelector(".dimmer")
          .classList.remove("off");
  });
});
const ReturnToExplodeAssemble = function () {
  sectionDataZooms.classList.remove("active");
  document.querySelector(".ctrl-btn.datazoom.datasheets").click();
  document
    .querySelector(`.dots_wrap.${explodeOrAssemble}`)
    .classList.add("active");
  document
    .querySelector(`.dots-all-wrapper.${explodeOrAssemble}`)
    .classList.add("active");

  sectionMapDots.classList.add("active");
};
const ActivateDataZoomWrapper = function (value) {
  datasheetsAllWrapper.classList.remove("active");
  datasheetsAllWrapper.style.display = "none";
  allDataZoomWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(value)) {
      el.classList.add("active");
      el.querySelectorAll(".datazoom-vid").forEach(function (el2) {
        setTimeout(function () {
          el2.play();
        }, 900);
      });
    }
  });
  activeDataZoomComp = document.querySelector(
    `.datazooms-comp-wrapper.${value}`
  );
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
