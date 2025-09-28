(() => {
  // script.js
  var navBar = document.querySelector(".nav_menu");
  var navLinkFeatures = document.querySelector(".nav_menu_link.features");
  var navLinkComponents = document.querySelector(".nav_menu_link.components");
  var navLinkDatasheets = document.querySelector(".nav_menu_link.datasheets");
  var navLinkInstructions = document.querySelector(
    ".nav_menu_link.instructions"
  );
  var allNavLinks = document.querySelectorAll(".nav_menu_link");
  var sectionFeatures = document.querySelector(".section_features");
  var sectionMapDots = document.querySelector(".section_map-dots");
  var sectionDatasheets = document.querySelector(".section_datasheets");
  var allSections = [sectionFeatures, sectionMapDots, sectionDatasheets];
  var ctrlBtnWrapper = document.querySelector(".ctrl-btn-wrapper");
  var allFeatureButtons = document.querySelectorAll(".feature-btn");
  var allDotsButtons = document.querySelectorAll(".dots-btn");
  var allDataZoomBtns = document.querySelectorAll(".datazoom-btn");
  var allCtrlButtons = [
    ...allFeatureButtons,
    ...allDotsButtons,
    ...allDataZoomBtns
  ];
  var allFeatureVidAllWrappers = document.querySelectorAll(".vid-all-wrapper");
  var allFeatureVidContentWrappers = document.querySelectorAll(
    ".vid-content-wrapper"
  );
  var allFeatureVidWrappers = document.querySelectorAll(".vid-wrapper");
  var allFeatureVids = document.querySelectorAll(".vid.feature");
  var allFeatureVidEndWrappers = document.querySelectorAll(".vid-end-wrapper");
  var allFeatureEndVids = document.querySelectorAll(".vid.end");
  var activeVidAllWrapper;
  var vidFlag;
  var newTimer;
  var allDatasheetButtons = document.querySelectorAll(".button-datasheet");
  var baseHeader = "Explode/Assemble";
  var baseText = "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
  var allDotTopContentWrappers = document.querySelectorAll(
    ".dots_wrap-top-wrapper"
  );
  var allDots = document.querySelectorAll(".map_dot");
  var allDotsAllWrappers = document.querySelectorAll(".dots-all-wrapper");
  var dotVidExplode = document.querySelector(".vid.explode");
  var dotVidExplodeMobileP = document.querySelector(".vid.explode.mobile-p");
  var dotVidAssemble = document.querySelector(".vid.assemble");
  var dotVidAssembleMobileP = document.querySelector(".vid.assemble.mobile-p");
  var allDotVids = [dotVidExplode, dotVidAssemble];
  var allDotVidsMobileP = [dotVidExplodeMobileP, dotVidAssembleMobileP];
  var dotExplodeButton = document.querySelector(".dots-btn.explode");
  var dotAssembleButton = document.querySelector(".dots-btn.assemble");
  var explodeDotsWrapper = document.querySelector(".dots-all-wrapper.explode");
  var activeDotsWrap = explodeDotsWrapper;
  var dotsFlag;
  var datasheetButtonTimer;
  var explodeOrAssemble;
  var compNumberString;
  var compContentActive = false;
  var blackout = document.querySelector(".blackout");
  var dataZoomBackButton = document.querySelector(".datazoom-btn.back");
  var dataZoomDatasheetsButton = document.querySelector(
    ".datazoom-btn.datasheets"
  );
  var datasheetsAllWrapper = document.querySelector(".datasheets-all-wrapper");
  var allDataZoomWrappers = document.querySelectorAll(
    ".datazooms-comp-wrapper"
  );
  var allDataZoomVids = document.querySelectorAll(".vid.datazoom");
  var allTextImageButtons = document.querySelectorAll(".text-image-btn");
  var dataZoomMainHeading = document.querySelector(".datazoom-main-heading");
  var allDataZoomSubHeadings = document.querySelectorAll(
    ".datazoom-subheading"
  );
  var allDataZoomText = document.querySelectorAll(".datazoom-text");
  var activeDataZoomComp;
  var imageTextFlag = "text";
  var fromExplodeAssemble = false;
  navBar.addEventListener("click", function(e) {
    const clicked = e.target.closest(".nav_menu_link");
    if (!clicked) return;
    const activeSectionFlag = clicked.classList[1];
    ActivateSection(activeSectionFlag);
  });
  var ActivateSection = function(value) {
    allNavLinks.forEach(function(el) {
      el.classList.remove("current");
      if (el.classList.contains(value)) el.classList.add("current");
    });
    allSections.forEach(function(el) {
      el.classList.remove("active");
    });
    allCtrlButtons.forEach(function(el) {
      el.classList.remove("active");
    });
    switch (value) {
      case "features":
        ResetAndPauseAllVideos();
        allFeatureVidAllWrappers.forEach(function(el) {
          el.classList.remove("active");
          if (el.classList.contains("rotation")) el.classList.add("active");
        });
        allFeatureVidContentWrappers.forEach(function(el) {
          el.classList.remove("active");
          if (el.classList.contains("rotation")) el.classList.add("active");
        });
        allFeatureVids.forEach(function(el) {
          el.classList.remove("active");
          if (el.classList.contains("rotation")) el.classList.add("active");
        });
        allFeatureButtons.forEach(function(el) {
          el.classList.add("active");
        });
        ctrlBtnWrapper.classList.add("active");
        sectionFeatures.classList.add("active");
        FlashBlackout();
        break;
      case "components":
        ResetAndPauseAllVideos();
        allDotsAllWrappers.forEach(function(el) {
          el.classList.remove("active");
        });
        document.querySelector(".dots_wrap.explode").classList.add("active");
        explodeDotsWrapper.classList.add("active");
        activeDotsWrap = explodeDotsWrapper;
        dotsFlag = "";
        explodeDotsWrapper.querySelector(".dots_wrap-top-wrapper").classList.add("active");
        dotAssembleButton.classList.remove("active");
        dotExplodeButton.classList.add("active");
        ctrlBtnWrapper.classList.add("active");
        sectionMapDots.classList.add("active");
        FlashBlackout();
        break;
      case "datasheets":
        dataZoomBackButton.classList.remove("active");
        imageTextFlag = "text";
        allTextImageButtons.forEach(
          (el) => el.querySelector(".text-image-btn-text").innerHTML = "image"
        );
        allDataZoomSubHeadings.forEach((el) => el.classList.add("active"));
        allDataZoomText.forEach((el) => el.classList.add("active"));
        allDataZoomWrappers.forEach(function(el) {
          el.classList.remove("active");
          el.querySelector(".datazoom-content-wrapper").classList.remove(
            "active"
          );
          el.querySelector(".dimmer").classList.add("off");
          el.querySelectorAll(".datazoom-image").forEach(
            (el2) => el2.classList.remove("active")
          );
        });
        datasheetsAllWrapper.style.display = "grid";
        setTimeout(function() {
          datasheetsAllWrapper.classList.add("active");
        }, 25);
        fromExplodeAssemble = false;
        ctrlBtnWrapper.classList.remove("active");
        sectionDatasheets.classList.add("active");
        FlashBlackout();
        break;
      case "instructions":
        ResetAndPauseAllVideos();
        FlashBlackout();
        break;
    }
  };
  var ResetAndPauseAllVideos = function() {
    allFeatureVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allFeatureEndVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allDotVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allDotVidsMobileP.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allDataZoomVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
  };
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".feature-btn");
    if (!clicked) return;
    vidFlag = clicked.classList[1];
    clearTimeout(newTimer);
    newTimer = setTimeout(() => {
      SetActiveVidAndPlay("rotation");
    }, 1e4);
    SetActiveVidAndPlay(vidFlag);
  });
  allFeatureVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      el.parentElement.parentElement.parentElement.querySelector(".vid-content-wrapper").classList.add("active");
      SetActiveEndVidAndPlay(vidFlag);
    });
  });
  var SetActiveVidAndPlay = function(vidFlag2) {
    allFeatureVids.forEach(function(el) {
      el.currentTime = 0;
    });
    allFeatureEndVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allFeatureVidWrappers.forEach(function(el) {
      el.classList.add("active");
    });
    allFeatureVidAllWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(vidFlag2)) {
        el.classList.add("active");
        activeVidAllWrapper = el;
      }
    });
    allFeatureVidContentWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (vidFlag2 === "rotation" && el.classList.contains("rotation")) {
        el.classList.add("active");
        return;
      }
    });
    activeVidAllWrapper.querySelectorAll(".vid.feature").forEach(function(el) {
      el.play();
    });
    activeVidAllWrapper.querySelectorAll(".vid.feature.mobile-p").forEach(function(el) {
      el.play();
    });
  };
  var SetActiveEndVidAndPlay = function() {
    activeVidAllWrapper.querySelectorAll(".vid-wrapper").forEach(function(el) {
      el.classList.remove("active");
    });
    activeVidAllWrapper.querySelectorAll(".vid.end").forEach(function(el) {
      el.play();
    });
    activeVidAllWrapper.querySelectorAll(".vid.end.mobile-p").forEach(function(el) {
      el.play();
    });
  };
  allDots.forEach(function(el) {
    el.addEventListener("click", function() {
      compContentActive = true;
      FadeInTopWrapperContent();
      activeDotsWrap.querySelector(".dots_wrap-header").innerHTML = el.querySelector(".map_dot-name").innerHTML;
      activeDotsWrap.querySelector(".dots_wrap-text").innerHTML = el.querySelector(".map_dot-description").innerHTML;
      activeDotsWrap.querySelector(".button-datasheet").classList.add("active");
    });
    el.addEventListener("mouseover", function() {
      clearTimeout(datasheetButtonTimer);
    });
    el.addEventListener("mouseout", function() {
      datasheetButtonTimer = setTimeout(function() {
        ResetTopWrapperContent(true);
        compContentActive = false;
      }, 1500);
    });
  });
  allDotTopContentWrappers.forEach(function(el) {
    el.addEventListener("mouseover", function() {
      clearTimeout(datasheetButtonTimer);
    });
    el.addEventListener("mouseout", function() {
      datasheetButtonTimer = setTimeout(function() {
        ResetTopWrapperContent(true);
        compContentActive = false;
      }, 1500);
    });
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
      allDotsButtons.forEach(function(el2) {
        el2.classList.remove("active");
        if (el2.classList.contains(dotsFlag)) {
          el2.classList.add("active");
        }
      });
      ToggleDotsImage(activeDotsWrap, true);
      compContentActive = true;
      FadeInTopWrapperContent();
      compContentActive = false;
    });
  });
  allDatasheetButtons.forEach(function(el) {
    el.addEventListener("click", function() {
      explodeOrAssemble = el.parentElement.parentElement.classList[1];
      const compNumber = el.parentElement.querySelector(".dots_wrap-header").innerHTML;
      if (compNumber.length > 11) {
        compNumberString = `comp-${compNumber.slice(-2)}`;
      } else {
        compNumberString = `comp-${compNumber[compNumber.length - 1]}`;
      }
      OpenDataSheet(compNumberString, explodeOrAssemble);
    });
  });
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".dots-btn");
    if (!clicked) return;
    allDotVids.forEach(function(el) {
      el.currentTime = 0;
    });
    allDotVidsMobileP.forEach(function(el) {
      el.currentTime = 0;
    });
    dotsFlag = clicked.classList[1];
    activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.remove("active");
    ToggleDotsImage(activeDotsWrap, false);
    ResetTopWrapperContent(false);
    PlayActiveDotsVideo();
  });
  var ActivateDotsButtons = function() {
    allDataZoomBtns.forEach(function(el) {
      el.classList.remove("active");
    });
    allDotsButtons.forEach(function(el) {
      el.classList.add("active");
    });
    if (activeDotsWrap.classList.contains("explode")) {
      dotAssembleButton.classList.remove("active");
    } else dotExplodeButton.classList.remove("active");
    ctrlBtnWrapper.classList.add("active");
  };
  var FadeInTopWrapperContent = function() {
    if (!compContentActive) return;
    activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.remove("active");
    setTimeout(function() {
      activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.add("active");
    }, 25);
  };
  var ResetTopWrapperContent = function(fadeInTopWrapperBool) {
    if (fadeInTopWrapperBool) FadeInTopWrapperContent();
    activeDotsWrap.querySelector(".dots_wrap-header").innerHTML = baseHeader;
    activeDotsWrap.querySelector(".dots_wrap-text").innerHTML = baseText;
    activeDotsWrap.querySelector(".button-datasheet").classList.remove("active");
  };
  var SetActiveDotsWrapper = function(value) {
    dotsFlag = value;
    allDotsAllWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(dotsFlag)) {
        el.classList.add("active");
        activeDotsWrap = el;
      }
    });
  };
  var ToggleDotsImage = function(activeImage, state) {
    const allActiveDotsImages = activeImage.querySelectorAll(".dots_wrap");
    allActiveDotsImages.forEach(function(el) {
      state ? el.classList.add("active") : el.classList.remove("active");
    });
  };
  var PlayActiveDotsVideo = function() {
    const vidArray = [
      document.querySelector(`.vid.${dotsFlag}`),
      document.querySelector(`.vid.${dotsFlag}.mobile-p`)
    ];
    vidArray.forEach((el) => el.play());
  };
  var OpenDataSheet = function(value) {
    compContentActive = false;
    datasheetsAllWrapper.classList.remove("active");
    sectionDatasheets.classList.add("active");
    sectionMapDots.classList.remove("active");
    navLinkComponents.classList.remove("current");
    navLinkDatasheets.classList.add("current");
    ResetTopWrapperContent(false);
    fromExplodeAssemble = true;
    document.querySelector(`.datasheet-card-wrapper.${value}`).click();
  };
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".datazoom-btn");
    if (!clicked) return;
    if (clicked.classList.contains("back")) {
      ReturnToExplodeAssemble();
    } else {
      dataZoomBackButton.classList.remove("active");
      imageTextFlag = "text";
      allTextImageButtons.forEach(
        (el) => el.querySelector(".text-image-btn-text").innerHTML = "image"
      );
      allDataZoomSubHeadings.forEach((el) => el.classList.add("active"));
      allDataZoomText.forEach((el) => el.classList.add("active"));
      allDataZoomWrappers.forEach(function(el) {
        el.classList.remove("active");
        el.querySelector(".datazoom-content-wrapper").classList.remove("active");
        el.querySelector(".dimmer").classList.add("off");
        el.querySelectorAll(".datazoom-image").forEach(
          (el2) => el2.classList.remove("active")
        );
      });
      allDataZoomVids.forEach(function(el) {
        el.currentTime = 0;
      });
      datasheetsAllWrapper.style.display = "grid";
      setTimeout(function() {
        datasheetsAllWrapper.classList.add("active");
      }, 25);
      fromExplodeAssemble = false;
      ctrlBtnWrapper.classList.remove("active");
    }
  });
  datasheetsAllWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".datasheet-card-wrapper");
    if (!clicked) return;
    allDataZoomVids.forEach(function(el) {
      el.currentTime = 0;
    });
    ActivateDataZoomWrapper(clicked.classList[1]);
  });
  allDataZoomVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      activeDataZoomComp.querySelector(".dimmer").classList.remove("off");
      activeDataZoomComp.querySelectorAll(".datazoom-image").forEach((el2) => el2.classList.add("active"));
      activeDataZoomComp.querySelector(".datazoom-content-wrapper").classList.add("active");
      ActivateDataZoomButons();
      ctrlBtnWrapper.classList.add("active");
    });
  });
  allTextImageButtons.forEach(function(el) {
    el.addEventListener("click", function() {
      el.querySelector(".text-image-btn-text").innerHTML = imageTextFlag;
      imageTextFlag === "text" ? imageTextFlag = "image" : imageTextFlag = "text";
      el.parentElement.parentElement.querySelectorAll(".datazoom-subheading").forEach((el2) => el2.classList.toggle("active"));
      el.parentElement.parentElement.querySelectorAll(".datazoom-text").forEach((el3) => el3.classList.toggle("active"));
      imageTextFlag === "image" ? el.parentElement.parentElement.parentElement.querySelector(".dimmer").classList.add("off") : el.parentElement.parentElement.parentElement.querySelector(".dimmer").classList.remove("off");
    });
  });
  var ActivateDataZoomButons = function() {
    allDotsButtons.forEach(function(el) {
      el.classList.remove("active");
    });
    allDataZoomBtns.forEach(function(el) {
      el.classList.add("active");
    });
    if (!fromExplodeAssemble) dataZoomBackButton.classList.remove("active");
  };
  var FlashBlackout = function() {
    blackout.classList.remove("off");
    setTimeout(function() {
      blackout.classList.add("off");
    }, 5);
  };
  var ReturnToExplodeAssemble = function() {
    navLinkDatasheets.classList.remove("current");
    navLinkComponents.classList.add("current");
    sectionDatasheets.classList.remove("active");
    document.querySelector(".datazoom-btn.datasheets").click();
    FlashBlackout();
    document.querySelector(`.dots_wrap.${explodeOrAssemble}`).classList.add("active");
    document.querySelector(`.dots-all-wrapper.${explodeOrAssemble}`).classList.add("active");
    sectionMapDots.classList.add("active");
    ActivateDotsButtons();
  };
  var ActivateDataZoomWrapper = function(value) {
    ctrlBtnWrapper.classList.remove("active");
    dataZoomMainHeading.classList.remove("active");
    datasheetsAllWrapper.classList.remove("active");
    datasheetsAllWrapper.style.display = "none";
    if (!fromExplodeAssemble) FlashBlackout();
    allDataZoomWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(value)) {
        el.classList.add("active");
        el.querySelectorAll(".vid.datazoom").forEach(function(el2) {
          setTimeout(function() {
            el2.play();
          }, 200);
        });
      }
    });
    activeDataZoomComp = document.querySelector(
      `.datazooms-comp-wrapper.${value}`
    );
  };
})();
