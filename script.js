// gsap.from(".logo", {
//   opacity: 0,
//   duration: 1,
//   delay: 2,
//   y: 10,
// });
// gsap.from(".navbar .nav_item", {
//   opacity: 0,
//   duration: 1,
//   delay: 2.1,
//   y: 30,
//   stagger: 0.2,
// });

// gsap.from(".title", {
//   opacity: 0,
//   duration: 1,
//   delay: 1.6,
//   y: 30,
// });
// gsap.from(".description", {
//   opacity: 0,
//   duration: 1,
//   delay: 1.8,
//   y: 30,
// });
// gsap.from(".btn", {
//   opacity: 0,
//   duration: 1,
//   delay: 2.1,
//   y: 30,
// });
// gsap.from(".image", {
//   opacity: 0,
//   duration: 1,
//   delay: 2.6,
//   y: 30,
// });
gsap.fromTo(
  ".logo",
  {
    opacity: 0,
    delay: 2,
    y: 100,
    duration: 1,
  },
  {
    opacity: 1,
    ease: "back",
    y: 0,
  }
);
gsap.fromTo(
  ".navbar .nav_item",
  {
    opacity: 0,
    delay: 2.1,
    y: 100,
    duration: 1,
  },
  {
    opacity: 1,
    ease: "back",
    y: 0,
    stagger: 0.2,
  }
);

gsap.fromTo(
  ".title",
  {
    opacity: 0.1,
    delay: 3,
    x: -1000,
    duration: 1,
  },
  {
    opacity: 1,
    ease: "back",
    x: 0,
  }
);
