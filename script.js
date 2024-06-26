$(document).ready(function () {
  const testimonial = $(".testimonial");
  console.log(testimonial[0].offsetWidth);

  function getScrollAmount() {
    let racesWidth = testimonial[0].scrollWidth;
    return racesWidth - window.innerWidth + 200;
  }

  const tween = gsap.to(testimonial, {
    x: -getScrollAmount(),
    duration: 3,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".wrapper-testimonial",
    start: "top 10%",
    end: () => `+=${getScrollAmount()}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    // markers: true,
  });

  // gallery
  gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0 });
  const animation = gsap.to(".photo:not(:first-child)", {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 1,
  });
  ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right",
    animation: animation,
    scrub: true,
    // markers: true,
  });
  ScrollTrigger.refresh();

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".gui", {
    scrollTrigger: {
      start: "top top",
      end: "+=100%",
      pin: ".gui",
      pinSpacing: true,
      scrub: true,
      markers: true,
    },
  });
  gsap.to(".gui-wrapper", {
    clipPath: " polygon(40% 20%, 60% 20%, 60% 80%, 40% 80%)",
    scrollTrigger: {
      trigger: ".gui",
      start: "top top",
      scrub: true,
    },
  });
  gsap.to(".gui-bot-center", {
    height: "100px",
    scrollTrigger: {
      trigger: ".gui",
      start: "top top",
      scrub: true,
    },
  });
  gsap.to(".gui-top-center", {
    height: "100px",
    scrollTrigger: {
      trigger: ".gui",
      start: "top top",
      scrub: true,
    },
  });
});
