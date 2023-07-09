
const first_sec = document.getElementById("1st")
const controller = new ScrollMagic.Controller();
gsap.fromTo(first_sec, { opacity: 0 }, { opacity: 1, ease: Power4.easeIn })
gsap.fromTo("#sroll-ind", { opacity: 0 }, { opacity: 1, ease: Power4.easeIn })

var tl = new TimelineMax({
  paused:true
});
// letter animation
tl.fromTo(".anim-typewriter", 8, {
  width: "0",
}, {
  width: "12em", /* same as CSS .line-1 width */
  ease:  SteppedEase.config(41)
}, 0);
// text cursor animation
tl.fromTo(".anim-typewriter", 0.5, {
  "border-right-color": "rgba(255,255,255,0.75)"
}, {
  "border-right-color": "rgba(255,255,255,0)",
  repeat: -1,
  ease:  SteppedEase.config(41)
}, 0);

tl.play();

let scr_indicator = new ScrollMagic.Scene({
    triggerElement: "#sroll-ind",
    triggerHook: 0.8
}).setTween(gsap.fromTo("#sroll-ind", { opacity: 1, scale:1 }, { opacity: 0,scale:1.2 })).addTo(controller)

var second_sec = document.getElementById("2nd")
let sec_section_main = new ScrollMagic.Scene({
    triggerElement: "#first-line",
    triggerHook: 0.9
}).setTween(gsap.fromTo("#first-line", { opacity: 0, translateY:100 }, { opacity: 1, translateY:0 })).addTo(controller)





