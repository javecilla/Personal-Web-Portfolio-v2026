import LocomotiveScroll from "locomotive-scroll";

export const lscroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  // smoothMobile: false,
  smartphone: {
    smooth: true,
  },
  // tablet: {
  //   smooth: true,
  // },
  // multiplier: 1.0,
  // firefoxMultiplier: 50,
  // touchMultiplier: 2,
  // resetNativeScroll: true,
  // reloadOnContextChange: true,
});

window.addEventListener("load", () => {
  lscroll.update();
  //scroll.update();
});

window.addEventListener("resize", () => {
  setTimeout(() => {
    lscroll.update();
  }, 10000);

  //scroll.update();
});
