const lottieCTRLSpin = document.querySelector(".lottie-ctrl.spin");
const lottieCTRLLights = document.querySelector(".lottie-ctrl.lights");
const lottieCTRLVanish = document.querySelector(".lottie-ctrl.vanish");
const allLotties = document.querySelectorAll(".lottie-wrapper");
const allLottieContents = document.querySelectorAll(".lottie-content-wrapper");
const lottie1 = document.querySelector(".lottie-wrapper.first");
const lottieSpin = document.querySelector(".lottie-wrapper.spin");
const lottie2 = document.querySelector(".lottie-wrapper.second");
const lottie3 = document.querySelector(".lottie-wrapper.third");
const lottieThree = document.querySelector(".lottie-div.third");
const btnLottie = document.querySelector(".button-lottie");
const btn1 = document.querySelector(".btn-lottie.first");
const btn2 = document.querySelector(".btn-lottie.second");
const btn3 = document.querySelector(".btn-lottie.third");
const button1 = document.querySelector(".button-lottie.first");
const button2 = document.querySelector(".button-lottie.second");
const button3 = document.querySelector(".button-lottie.third");
const btnSpin = document.querySelector(".btn-lottie.spin");
const btnLights = document.querySelector(".btn-lottie.lights");
const btnVanish = document.querySelector(".btn-lottie.vanish");
const buttonContainer = document.querySelector(".btn-container");
let lottieFlag;
//...........................................................
const vidRotation = document.querySelector(".vid-rotation");
const vidAllWrapFirst = document.querySelector(".vid-all-wrapper.first");
const vidContentWrapFirst = document.querySelector(
  ".vid-content-wrapper.first"
);
const vidContentWrapSecond = document.querySelector(
  ".vid-content-wrapper.second"
);
const vidContentWrapThird = document.querySelector(
  ".vid-content-wrapper.third"
);
const vidView1 = document.querySelector(".vid.first");
const vidView2 = document.querySelector(".vid.second");
const vidView3 = document.querySelector(".vid.third");
const allVidAllWrappers = document.querySelectorAll(".vid-all-wrapper");
const allContentWrappers = document.querySelectorAll(".vid-content-wrapper");
const allVidWrappers = document.querySelectorAll(".vid-wrapper");
const allVids = document.querySelectorAll(".vid");
const allVidEndWrappers = document.querySelectorAll(".vid-end-wrapper");
const vidBtnContainer = document.querySelector(".btn-vid-container");
let vidFlag;
let newTimer;
//...........................................................
const mapBtnContainer = document.querySelector(".btn-map-container");
const vidExplodeWrapper = document.querySelector(".vid-explode-wrapper");
const vidAssembleWrapper = document.querySelector(".vid-assemble-wrapper");
const vidExplode = document.querySelector(".vid-explode");
const vidAssemble = document.querySelector(".vid-assemble");
const textExplode = document.querySelector(".text.explode");
const textAssemble = document.querySelector(".text.assemble");
const dotsExplodeWrapper = document.querySelector(".dots-explode-wrapper");
const dotsAssembleWrapper = document.querySelector(".dots-assemble-wrapper");
let explodeFlag = false;
//...........................................................
//SIZING & SNAPING
console.log("testing 10!");
const vidSection = document.querySelector(".section_spacing");
const contactSection = document.querySelector(".section_contact.snap");
// const scrollBtnContainer = document.querySelector(".btn-scroll-container");
const btnScroll1 = document.querySelector(".button-scroll.scroll1");
const btnScroll2 = document.querySelector(".button-scroll.scroll2");

const sectionFeatures = document.querySelector(".section_action.features");
const sectionExplode = document.querySelector(".section_action.explode");
const allSections = document.querySelectorAll(".section_action");
const allNavLinks = document.querySelectorAll(".mini-nav-link");
const allCtrlBtns = document.querySelectorAll(".ctrl-btn");
const mainWrapper = document.querySelector(".main-wrapper");
const testDiv = document.querySelector(".test-div");
let startY;
let endY;
// scrollBtnContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".button-scroll");
//   // if (!clicked) return;
//   console.log("hi");
// });

//...........................................................
//NAVIGATION
const miniNav = document.querySelector(".mini-nav-wrapper");
const miniNavLink = document.querySelector(".mini-nav-link");
const buttonWrapper = document.querySelector(".ctrl-btn-wrapper");
const activeNav = document.querySelector(".active-nav");

miniNav.addEventListener("mouseover", function () {
  miniNav.style.height = "auto";
  activeNav.style.display = "none";
  miniNavLink.style.display = "block";
});
miniNav.addEventListener("mouseout", function () {
  miniNav.style.height = "2.6rem";
  activeNav.style.display = "block";
  miniNavLink.style.display = "none";
});

miniNav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".mini-nav-link");
  if (!clicked) return;
  setActiveSectionLinkBtns(clicked.classList[1]);
});
buttonWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".ctrl-btn");
  if (!clicked) return;
  console.log(clicked);
});

const setActiveSectionLinkBtns = function (section) {
  allSections.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(section)) {
      el.classList.add("active");
    }
  });
  allNavLinks.forEach(function (el) {
    activeNav.innerHTML = section;
    el.classList.remove("active");
    if (el.classList.contains(section)) {
      el.classList.add("active");
    }
  });
  allCtrlBtns.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(section)) {
      el.classList.add("active");
    }
  });
};
//...........................................................

// document.addEventListener("touchmove", function () {
//   console.log("touch!");
//   // document.querySelector(".screen-sizer.m-p").innerHTML = "hi";
//   testDiv.style.display = "block";
// });
sectionFeatures.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    setActiveSectionLinkBtns("explode");
    // sectionExplode.classList.add("active");
    // sectionFeatures.classList.remove("active");
  }
});
sectionFeatures.addEventListener("touchstart", function (e) {
  startY = e.changedTouches[0].screenY;
});
sectionFeatures.addEventListener("touchend", function (e) {
  endY = e.changedTouches[0].screenY;
  if (endY < startY) {
    sectionExplode.classList.add("active");
    sectionFeatures.classList.remove("active");
  } else if (endY > startY) {
    sectionFeatures.classList.add("active");
    sectionExplode.classList.remove("active");
  }
});
sectionExplode.addEventListener("wheel", function (e) {
  if (e.deltaY < 0) {
    setActiveSectionLinkBtns("features");
    // sectionFeatures.classList.add("active");
    // sectionExplode.classList.remove("active");
  }
});
sectionExplode.addEventListener("touchend", function (e) {
  endY = e.changedTouches[0].screenY;
  if (endY > startY) {
    sectionFeatures.classList.add("active");
    sectionExplode.classList.remove("active");
  } else if (endY < startY) {
    sectionExplode.classList.add("active");
    sectionFeatures.classList.remove("active");
  }
});
sectionExplode.addEventListener("touchmove", function (e) {
  sectionFeatures.classList.add("active");
  sectionExplode.classList.remove("active");
});

// vidSection.addEventListener("touchstart", function (e) {
//   e.preventDefault();
//   document.querySelector(".screen-sizer.m-l").innerHTML = "hi!";
//   document.querySelector(".screen-sizer.m-p").innerHTML = "hi!";
// });
// contactSection.addEventListener("wheel", function (e) {
//   if (e.deltaY < 0) {
//     vidSection.classList.add("active");
//     contactSection.classList.remove("active");
//   }
// });

//...........................................................
//MAP
mapBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button-vid");
  if (!clicked) return;
  vidExplode.currentTime = 0;
  vidAssemble.currentTime = 0;
  explodeFlag ? assembleFunction() : explodeFunction();
});

const explodeFunction = function () {
  mapBtnContainer.style["pointer-events"] = "none";
  explodeFlag = true;
  dotsExplodeWrapper.classList.remove("active");
  vidExplodeWrapper.classList.add("active");
  vidAssembleWrapper.classList.remove("active");
  vidExplode.play();
  textExplode.style.display = "none";
  textAssemble.style.display = "block";
};
const assembleFunction = function () {
  mapBtnContainer.style["pointer-events"] = "none";
  explodeFlag = false;
  dotsAssembleWrapper.classList.remove("active");
  vidAssembleWrapper.classList.add("active");
  vidExplodeWrapper.classList.remove("active");
  vidAssemble.play();
  textAssemble.style.display = "none";
  textExplode.style.display = "block";
};
vidExplode.addEventListener("ended", function () {
  mapBtnContainer.style["pointer-events"] = "auto";
  dotsAssembleWrapper.classList.add("active");
});
vidAssemble.addEventListener("ended", function () {
  mapBtnContainer.style["pointer-events"] = "auto";
  dotsExplodeWrapper.classList.add("active");
});
const datasheetsFunction = function () {
  console.log("datasheet function");
};
//...........................................................
//VIDEO
vidBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button-vid");
  if (!clicked) return;
  vidFlag = clicked.classList[1];
  setActiveVidAndPlay(vidFlag);
});

vidView1.addEventListener("ended", function () {
  vidContentWrapFirst.classList.add("active");
  setActiveEndVidAndPlay(vidFlag);
  ReplayIntroVid();
});

vidView2.addEventListener("ended", function () {
  vidContentWrapSecond.classList.add("active");
  setActiveEndVidAndPlay(vidFlag);
  ReplayIntroVid();
});

vidView3.addEventListener("ended", function () {
  vidContentWrapThird.classList.add("active");
  setActiveEndVidAndPlay(vidFlag);
  ReplayIntroVid();
});
//...........................................................
const setActiveVidAndPlay = function (vidFlag) {
  clearTimeout(newTimer);
  allContentWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (vidFlag === "rotation") {
      el.classList.add("active");
    }
  });

  allVids.forEach(function (el) {
    el.currentTime = 0;
  });

  allVidEndWrappers.forEach(function (el) {
    el.classList.remove("active");
  });

  allVidAllWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(vidFlag)) {
      el.classList.add("active");
    }
  });
  allVidWrappers.forEach(function (el) {
    el.classList.add("active");
  });
  document.querySelector(`.vid.${vidFlag}`).play();
};
//...........................................................
const setActiveEndVidAndPlay = function (vidFlag) {
  allVidWrappers.forEach(function (el) {
    el.classList.remove("active");
  });
  allVidEndWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(vidFlag)) {
      el.classList.add("active");
    }
    document.querySelector(`.vid.end.${vidFlag}`).play();
  });
};
//...........................................................
const ReplayIntroVid = function () {
  newTimer = setTimeout(() => {
    setActiveVidAndPlay("rotation");
  }, 3000);
};
//...........................................................
// LOTTIE;
const mutationObserver = new MutationObserver((entries) => {
  const target = entries[entries.length - 1].target.classList[1];
  document.querySelector(`.btn-lottie.${target}`).click();
  buttonContainer.style["pointer-events"] = "auto";
});

mutationObserver.observe(lottieCTRLSpin, { attributes: true });
mutationObserver.observe(lottieCTRLLights, { attributes: true });
mutationObserver.observe(lottieCTRLVanish, { attributes: true });

buttonContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button-lottie");
  if (!clicked) return;
  lottieFlag = clicked.classList[1];
  SetActiveLottie(`${lottieFlag}`);
  document.querySelector(`.btn-lottie.${lottieFlag}`).click();
});
//...........................................................
const SetActiveLottie = function (activeLottie) {
  buttonContainer.style["pointer-events"] = "none";
  allLotties.forEach((el) => {
    el.classList.remove("active");
    el.style.opacity = "0";
    if (el.classList.contains(activeLottie)) {
      el.classList.add("active");
      el.style.opacity = "100";
    }
    allLottieContents.forEach((el) => {
      el.classList.remove("active");
      el.style.opacity = "0";
      if (el.classList.contains(activeLottie)) {
        el.classList.add("active");
      }
    });
  });
};
//...........................................................
