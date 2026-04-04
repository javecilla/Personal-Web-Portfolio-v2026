import LocomotiveScroll from "locomotive-scroll";

export const lscroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  // smoothMobile: false,
  smartphone: {
    smooth: false,
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
});

// Update scroll boundaries when the container changes size (e.g. images load, layout shifts)
const scrollContainer = document.querySelector("[data-scroll-container]");
if (scrollContainer) {
  const ro = new ResizeObserver(() => {
    lscroll.update();
  });
  ro.observe(scrollContainer);
}

// Keep a small debounce for window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    lscroll.update();
  }, 250);
});
