(() => {
  // script.js
  var sectionMapDots = document.querySelector(".section_map-dots");
  var allDatasheetButtons = document.querySelectorAll(".button-datasheet");
  var baseHeader = "Explode/Assemble";
  var baseText = "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
  var allDotTopContentWrappers = document.querySelectorAll(
    ".dots_wrap-top-wrapper"
  );
  var allDots = document.querySelectorAll(".map_dot");
  var ctrlBtnWrapper = document.querySelector(".ctrl-btn-wrapper");
  var allDotsButtons = document.querySelectorAll(".dots-btn");
  var allDotAllWrappers = document.querySelectorAll(".dots-all-wrapper");
  var vidExplode = document.querySelector(".vid.explode");
  var vidExplodeMobileP = document.querySelector(".vid.explode.mobile-p");
  var vidAssemble = document.querySelector(".vid.assemble");
  var vidAssembleMobileP = document.querySelector(".vid.assemble.mobile-p");
  var allDotVids = [vidExplode, vidAssemble];
  var allDotVidsMobileP = [vidExplodeMobileP, vidAssembleMobileP];
  var dotExplodeButton = document.querySelector(".dots-btn.explode");
  var dotAssembleButton = document.querySelector(".dots-btn.assemble");
  var allDotButtons = [dotExplodeButton, dotAssembleButton];
  var explodeDotsWrapper = document.querySelector(".dots-all-wrapper.explode");
  var activeDotsWrap = explodeDotsWrapper;
  var dotsFlag;
  var datasheetButtonTimer;
  var explodeOrAssemble;
  var compNumberString;
  var compContentActive = false;
  var blackout = document.querySelector(".blackout");
  var dataZoomBackButton = document.querySelector(".datazoom-btn.back");
  var sectionDataZooms = document.querySelector(".section_datasheets");
  var allDataZoomBtns = document.querySelectorAll(".datazoom-btn");
  var datasheetsAllWrapper = document.querySelector(".datasheets-all-wrapper");
  var allDataZoomWrappers = document.querySelectorAll(
    ".datazooms-comp-wrapper"
  );
  var allDataZoomVids = document.querySelectorAll(".vid.datazoom");
  var allTextImageButtons = document.querySelectorAll(".text-image-btn");
  var allDataZoomSubHeadings = document.querySelectorAll(
    ".datazoom-subheading"
  );
  var allDataZoomText = document.querySelectorAll(".datazoom-text");
  var activeDataZoomComp;
  var imageTextFlag = "text";
  var fromExplodeAssemble = false;
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
      allDotButtons.forEach(function(el2) {
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
    if (clicked.classList.contains("datasheets")) {
      activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.add("active");
      return;
    }
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
    allDotButtons.forEach(function(el) {
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
    allDotAllWrappers.forEach(function(el) {
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
    sectionDataZooms.classList.add("active");
    sectionMapDots.classList.remove("active");
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
      document.querySelector(".datazoom-btn.back").classList.remove("active");
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
    allDotButtons.forEach(function(el) {
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
    sectionDataZooms.classList.remove("active");
    document.querySelector(".datazoom-btn.datasheets").click();
    FlashBlackout();
    document.querySelector(`.dots_wrap.${explodeOrAssemble}`).classList.add("active");
    document.querySelector(`.dots-all-wrapper.${explodeOrAssemble}`).classList.add("active");
    sectionMapDots.classList.add("active");
    ActivateDotsButtons();
  };
  var ActivateDataZoomWrapper = function(value) {
    ctrlBtnWrapper.classList.remove("active");
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
          }, 900);
        });
      }
    });
    activeDataZoomComp = document.querySelector(
      `.datazooms-comp-wrapper.${value}`
    );
  };
})();
