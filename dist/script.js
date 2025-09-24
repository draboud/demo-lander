(() => {
  // script.js
  var blackout = document.querySelector(".blackout");
  var sectionMapDots = document.querySelector(".section_map-dots");
  var allDatasheetButtons = document.querySelectorAll(".button-datasheet");
  var baseHeader = "Explode/Assemble";
  var baseText = "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
  var dotTopContentWrapper = document.querySelector(".dots_wrap-top-wrapper");
  var allDotTopContentWrappers = document.querySelectorAll(
    ".dots_wrap-top-wrapper"
  );
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
  var datasheetButtonTimer;
  var explodeOrAssemble;
  var compNumberString;
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
  allDotTopContentWrappers.forEach(function(el) {
    el.addEventListener("mouseover", function() {
      clearTimeout(datasheetButtonTimer);
    });
    el.addEventListener("mouseout", function() {
      datasheetButtonTimer = setTimeout(function() {
        ResetTopWrapperContent();
      }, 1500);
    });
  });
  allDots.forEach(function(el) {
    el.addEventListener("click", function() {
      activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.remove("active");
      setTimeout(function() {
        activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.add("active");
      }, 25);
      activeDotsWrap.querySelector(".dots_wrap-header").innerHTML = el.querySelector(".map_dot-name").innerHTML;
      activeDotsWrap.querySelector(".dots_wrap-text").innerHTML = el.querySelector(".map_dot-description").innerHTML;
      activeDotsWrap.querySelector(".button-datasheet").classList.add("active");
    });
    el.addEventListener("mouseover", function() {
      clearTimeout(datasheetButtonTimer);
    });
    el.addEventListener("mouseout", function() {
      datasheetButtonTimer = setTimeout(function() {
        ResetTopWrapperContent();
      }, 1500);
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
    ResetTopWrapperContent();
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
  var ResetTopWrapperContent = function() {
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
  var OpenDataSheet = function(value, explodeOrAssemble2) {
    FlashBlackout();
    sectionMapDots.classList.remove("active");
    sectionDataZooms.classList.add("active");
    document.querySelector(`.datasheet-card-wrapper.${value}`).click();
    backButton.classList.add("active");
  };
  var FlashBlackout = function() {
    blackout.classList.remove("off");
    setTimeout(function() {
      blackout.classList.add("off");
    }, 5);
  };
  var backButton = document.querySelector(".ctrl-btn.datazoom.back");
  var sectionDataZooms = document.querySelector(".section_datasheets");
  var dataZoomButtonWrapper = document.querySelector(
    ".ctrl-btn-wrapper.datazooms"
  );
  var datasheetsAllWrapper = document.querySelector(".datasheets-all-wrapper");
  var allDataZoomWrappers = document.querySelectorAll(
    ".datazooms-comp-wrapper"
  );
  var allDataZoomVids = document.querySelectorAll(".datazoom-vid");
  var activeDataZoomComp;
  var allTextImageButtons = document.querySelectorAll(".text-image-btn");
  var allDataZoomSubHeadings = document.querySelectorAll(
    ".datazoom-subheading"
  );
  var allDataZoomText = document.querySelectorAll(".datazoom-text");
  var imageTextFlag = "text";
  dataZoomButtonWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".ctrl-btn");
    if (!clicked) return;
    if (clicked.classList.contains("back")) {
      ReturnToExplodeAssemble();
    } else {
      document.querySelector(".ctrl-btn.datazoom.back").classList.remove("active");
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
      dataZoomButtonWrapper.classList.remove("active");
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
      dataZoomButtonWrapper.classList.add("active");
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
  var ReturnToExplodeAssemble = function() {
    sectionDataZooms.classList.remove("active");
    document.querySelector(".ctrl-btn.datazoom.datasheets").click();
    document.querySelector(`.dots_wrap.${explodeOrAssemble}`).classList.add("active");
    document.querySelector(`.dots-all-wrapper.${explodeOrAssemble}`).classList.add("active");
    sectionMapDots.classList.add("active");
  };
  var ActivateDataZoomWrapper = function(value) {
    datasheetsAllWrapper.classList.remove("active");
    datasheetsAllWrapper.style.display = "none";
    allDataZoomWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(value)) {
        el.classList.add("active");
        el.querySelectorAll(".datazoom-vid").forEach(function(el2) {
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
