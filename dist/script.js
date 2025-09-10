(() => {
  // script.js
  var ctrlBtnWrapper = document.querySelector(".ctrl-btn-wrapper");
  var allChainDivs = document.querySelectorAll(".chain-vid-div");
  var allChainDivEnds = document.querySelectorAll(".chain-vid-div-end");
  var allChainVids = document.querySelectorAll(".chain-vid");
  var allChainVidEnds = document.querySelectorAll(".chain-vid-end");
  var chainVidFlag = "first";
  var endFlag = false;
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".chain-btn");
    chainVidFlag = clicked.classList[1];
    ActivateEndChainVid();
  });
  allChainVidEnds.forEach(function(el) {
    el.addEventListener("ended", function() {
      ActivateStartChainVid();
    });
  });
  var ActivateStartChainVid = function() {
    allChainDivs.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(chainVidFlag)) {
        el.classList.add("active");
        endFlag = chainVidFlag;
        PlayChainVid(el.querySelector(".chain-vid"));
      }
    });
  };
  var ActivateEndChainVid = function() {
    if (endFlag) {
      allChainDivEnds.forEach(function(el) {
        el.classList.remove("active");
        if (el.classList.contains(endFlag)) {
          el.classList.add("active");
          PlayChainVid(el.querySelector(".chain-vid-end"));
        }
      });
    } else {
      ActivateStartChainVid();
    }
  };
  var PlayChainVid = function(value) {
    allChainVids.forEach(function(el) {
      el.currentTime = 0;
    });
    value.play();
  };
})();
