// const lottieCTRLSpin = document.querySelector(".lottie-ctrl.spin");
// const lottieCTRLLights = document.querySelector(".lottie-ctrl.lights");
// const lottieCTRLVanish = document.querySelector(".lottie-ctrl.vanish");
// const allLotties = document.querySelectorAll(".lottie-wrapper");
// const allLottieContents = document.querySelectorAll(".lottie-content-wrapper");
// const lottie1 = document.querySelector(".lottie-wrapper.first");
// const lottieSpin = document.querySelector(".lottie-wrapper.spin");
// const lottie2 = document.querySelector(".lottie-wrapper.second");
// const lottie3 = document.querySelector(".lottie-wrapper.third");
// const lottieThree = document.querySelector(".lottie-div.third");
// const btnLottie = document.querySelector(".button-lottie");
// const btn1 = document.querySelector(".btn-lottie.first");
// const btn2 = document.querySelector(".btn-lottie.second");
// const btn3 = document.querySelector(".btn-lottie.third");
// const button1 = document.querySelector(".button-lottie.first");
// const button2 = document.querySelector(".button-lottie.second");
// const button3 = document.querySelector(".button-lottie.third");
// const btnSpin = document.querySelector(".btn-lottie.spin");
// const btnLights = document.querySelector(".btn-lottie.lights");
// const btnVanish = document.querySelector(".btn-lottie.vanish");
// const buttonContainer = document.querySelector(".btn-container");
// let lottieFlag;
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
const vidView1 = document.querySelector(".vid-first");
const vidView2 = document.querySelector(".vid-second");
const vidView3 = document.querySelector(".vid-third");
const allVidWrappers = document.querySelectorAll(".vid-all-wrapper");
const allContentWrappers = document.querySelectorAll(".vid-content-wrapper");
const allVids = document.querySelectorAll(".vid");
const vidBtnContainer = document.querySelector(".btn-vid-container");
let vidFlag;
//...........................................................
console.log("Aug 25, 2025-3:49");

//...........................................................
//VIDEO
vidBtnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button-vid");
  if (!clicked) return;
  vidFlag = clicked.classList[1];
  console.log(vidFlag);
  setActiveVidAndPlay(vidFlag);
});

vidView1.addEventListener("ended", function () {
  console.log("video 1 has ended");
  vidContentWrapFirst.classList.add("active");
});

vidView2.addEventListener("ended", function () {
  console.log("video 2 has ended");
  vidContentWrapSecond.classList.add("active");
});

vidView3.addEventListener("ended", function () {
  console.log("video 3 has ended");
  vidContentWrapThird.classList.add("active");
});
//...........................................................
const setActiveVidAndPlay = function (vidFlag) {
  allContentWrappers.forEach(function (el) {
    el.classList.remove("active");
  });
  document.querySelector(`.vid-${vidFlag}`).currentTime = 0;
  // allVids.forEach(function (el) {
  //   el.currentTime = 0;
  // });
  allVidWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(vidFlag)) {
      el.classList.add("active");
    }
  });
  document.querySelector(`.vid-${vidFlag}`).play();
};
//...........................................................
//...........................................................
//LOTTIE
// const mutationObserver = new MutationObserver((entries) => {
//   const target = entries[entries.length - 1].target.classList[1];
//   document.querySelector(`.btn-lottie.${target}`).click();
//   buttonContainer.style["pointer-events"] = "auto";
// });

// mutationObserver.observe(lottieCTRLSpin, { attributes: true });
// mutationObserver.observe(lottieCTRLLights, { attributes: true });
// mutationObserver.observe(lottieCTRLVanish, { attributes: true });

// buttonContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".button-lottie");
//   if (!clicked) return;
//   lottieFlag = clicked.classList[1];
//   SetActiveLottie(`${lottieFlag}`);
//   document.querySelector(`.btn-lottie.${lottieFlag}`).click();
// });
// //...........................................................
// const SetActiveLottie = function (activeLottie) {
//   buttonContainer.style["pointer-events"] = "none";
//   allLotties.forEach((el) => {
//     el.classList.remove("active");
//     el.style.opacity = "0";
//     if (el.classList.contains(activeLottie)) {
//       el.classList.add("active");
//       el.style.opacity = "100";
//     }
//     allLottieContents.forEach((el) => {
//       el.classList.remove("active");
//       el.style.opacity = "0";
//       if (el.classList.contains(activeLottie)) {
//         el.classList.add("active");
//       }
//     });
//   });
// };
//...........................................................

//<style>
// 	#vid{

//       @media (min-width: 1200px) {
//         .my-element {
//             width: 960px; /* Fixed width for desktops */
//         }
//     }
//       @media (min-width: 768px) {
//         .my-element {
//             width: 700px; /* Fixed width for tablets */
//         }
//     }
// </style>

// //<video id= "dpVideo" muted= "muted" loop  width= 100%>
// <source src= "https://uploads-ssl.webflow.com/6361575c831c26646b85abba/636834af43f4586344d2a95f_Crane Video - Display Panel-transcode.mp4">
// </video>

// video = document.querySelector("video")
// video.playbackRate = 2

//...........................................................
