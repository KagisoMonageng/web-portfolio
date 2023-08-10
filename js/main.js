
gsap.registerPlugin(TextPlugin)
// Loading screen

const first_sec = document.getElementById("1st")
const controller = new ScrollMagic.Controller();

const logos = first_sec.querySelectorAll(".logo")

var tl = new TimelineMax({
  paused: true
});
// letter animation
tl.fromTo('#loading-screen', { opacity: 1, display: 'flex' }, { opacity: 0, display: 'none', delay: 2 })
  .fromTo(first_sec, { opacity: 0 }, { opacity: 1, ease: Power4.easeIn })
  .fromTo("#hello", 2, { opacity: 0, translateX: 200 }, { opacity: 1, translateX: 0 })
  .fromTo("#my-name", 2, { opacity: 0, translateX: -200 }, { opacity: 0.5, translateX: 0 })
  .fromTo(".text-img", { rotation: 0, opacity: 0 }, {
    rotation: 90, opacity: 0.8, ease: Power1.easeInOut, stagger: 0.1
  })
  .fromTo("#surname", 1, { opacity: 0 }, { opacity: 0.8 })
  .fromTo("#short-bio", { opacity: 0 }, { opacity: 1 })
  .fromTo(logos[0], { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 })
  .fromTo(logos[1], { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 })
  .fromTo(logos[2], { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 })
  .fromTo(logos[3], { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 })
  .fromTo(logos[4], { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 })
  .fromTo("#logos", { backgroundColor: "transparent" }, { backgroundColor: "rgba(209,213,219,0.2)" })
  .fromTo("#sroll-ind", { opacity: 0 }, { opacity: 1 })
  .to("#scroll-down", { duration: 2, text: "Scroll down for more", ease: "none" });


tl.play();

var tl_scroll = gsap.timeline()
tl_scroll.to(["#sroll-ind", "#hello"], { opacity: 0, scale: 1.2, delay: 0 })
  .to(["#my-name", "#my-image"], { opacity: 0, translateX: 200, delay: 0 })
  .to(["#short-bio", "#logos"], { opacity: 0, translateX: -200, delay: 0 })

var tl_img_text = gsap.timeline()
tl_img_text.to(".text-img", {
  rotation: 180, opacity: 0, ease: Power1.easeInOut, stagger: 0.1
})

let scr_indicator = new ScrollMagic.Scene({
  triggerElement: "#sroll-ind",
  triggerHook: 0.8
}).setTween(tl_scroll).addTo(controller)
let scr_rotate = new ScrollMagic.Scene({
  triggerElement: "#sroll-ind",
  triggerHook: 0.8,
  duration: "100%"
}).setTween(tl_img_text).addTo(controller)

// Second Section
var second_sec = document.getElementById("2nd")

var sec_tl = gsap.timeline()
var sec_entry = gsap.timeline()
sec_entry.fromTo("#first-line", { opacity: 0, translateY: 100 }, { opacity: 1, translateY: 0 })
  .fromTo("#my-work", { opacity: 0, translateY: 100 }, { opacity: 1, translateY: 0 });



// Define a media query
const mediaQuery = window.matchMedia('(max-width: 991px)');

// Function to be executed when the media query matches
function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    // Apply styles or execute code for small screens
    sec_tl
      .to(["#first-line", "#my-work"], { translateY: -200 ,delay:2})
      .to("#my-work", { translateY: -100 , ease: Power4.easeInOut, delay: 1 })
      .fromTo(".big-my-work", { opacity: 0, translateY: 200 }, { opacity: 1, translateY: -100, delay: 1 })

  } else {
    // Apply styles or execute code for larger screens
    sec_tl
      .to("#my-work span", { opacity: 0, display: "none", delay: 3 })
      .to(["#first-line", "#my-work"], { translateY: -200 })
      .to("#my-work", { rotation: 90, ease: Power4.easeInOut, delay: 1 })
      .to("#rotate-text", { rotation: 90, ease: Power4.easeInOut })
      .fromTo(".big-my-work", { opacity: 0, translateY: 200 }, { opacity: 1, translateY: 0, delay: 1 })

  }
}

// Initial call to handle the media query
handleMediaQueryChange(mediaQuery);

// Add a listener to execute the function whenever the media query status changes
mediaQuery.addListener(handleMediaQueryChange);







let sec_section_entry = new ScrollMagic.Scene({
  triggerElement: "#first-line",
  triggerHook: 0.9
}).setTween(sec_entry).addTo(controller)

let sec_section_scoll = new ScrollMagic.Scene({
  triggerElement: "#first-line",
  triggerHook: 0.6
}).setTween(sec_tl).addTo(controller)


// GRIEND SECTION
var griend_sec = document.getElementById("griend");
var griend_tl = gsap.timeline()

griend_tl
  .fromTo(["#griend #overlay-griend", "#griend video"], { opacity: 0 }, { opacity: 1 })
  .to("#griend .preview-screen", { opacity: 0 })
  .to("#griend .preview-screen", { zIndex: -1 })
  .fromTo("#griend .preview-screen", { display: "block" }, { display: "none" })
// .fromTo("#overlay-griend",2,{backdropFilter: "blur(0px)"},{backdropFilter: "blur(64px)"})
// .fromTo("#griend .game-on",{opacity:0,translateY:200},{opacity:0.3,translateY:0})
// .fromTo("#griend .images-cont",{opacity:0,translateY:200},{opacity:1,translateY:0})
// .fromTo("#griend .about-this",{opacity:0,translateY:200},{opacity:1,translateY:0})
// .fromTo("#griend .huge-text-name",{opacity:0,translateX:-200},{opacity:1,translateX:0})

let griend_scene = new ScrollMagic.Scene({
  triggerElement: griend_sec,
  triggerHook: 0.8,
  // duration:"100%"
}).setTween(griend_tl).addTo(controller)

griend_scene.on("enter", () => {
  griend_sec.querySelector("video").play()
})




