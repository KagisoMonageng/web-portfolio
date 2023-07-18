
gsap.registerPlugin(TextPlugin)
// Loading screen

const first_sec = document.getElementById("1st")
const controller = new ScrollMagic.Controller();

const logos = first_sec.querySelectorAll(".logo")

var tl = new TimelineMax({
  paused:true
});
// letter animation
tl.fromTo('#loading-screen',{opacity:1,display:'flex'},{opacity:0,display:'none',delay:2})
.fromTo(first_sec, { opacity: 0 }, { opacity: 1, ease: Power4.easeIn })
.fromTo("#hello",2, { opacity: 0,translateX:200 }, { opacity: 1,translateX:0 })
.fromTo("#my-name",2, { opacity: 0,translateX:-200 }, { opacity: 0.6,translateX:0 })
.fromTo("#my-image",{opacity:0},{opacity:1})
.fromTo("#surname", 1,{ opacity: 0 }, { opacity: 0.8})
.fromTo("#short-bio",{ opacity: 0 }, { opacity: 1 })
.fromTo(logos[0],{opacity: 0,scale:0.5},{opacity: 1,scale:1})
.fromTo(logos[1],{opacity: 0,scale:0.5},{opacity: 1,scale:1})
.fromTo(logos[2],{opacity: 0,scale:0.5},{opacity: 1,scale:1})
.fromTo(logos[3],{opacity: 0,scale:0.5},{opacity: 1,scale:1})
.fromTo(logos[4],{opacity: 0,scale:0.5},{opacity: 1,scale:1})
.fromTo("#logos",{backgroundColor: "transparent"},{backgroundColor: "rgba(209,213,219,0.2)"})
.fromTo("#sroll-ind", { opacity: 0 }, { opacity: 1})
.to("#scroll-down", {duration: 2, text: "Scroll down for more", ease: "none"});

// .fromTo(".anim-typewriter", 8, {
//   width: "0",
// }, {
//   width: "12em", /* same as CSS .line-1 width */
//   ease:  SteppedEase.config(41)
// }, 0)
// .fromTo(".anim-typewriter", 0.5, {
//   "border-right-color": "rgba(255,255,255,0.75)"
// }, {
//   "border-right-color": "rgba(255,255,255,0)",
//   repeat: -1,
//   ease:  SteppedEase.config(41)
// }, 0)

tl.play();

var tl_scroll = gsap.timeline()
tl_scroll.to(["#sroll-ind","#hello"], { opacity: 0,scale:1.2,delay:0})
.to("#body-color", { backgroundImage: "linear-gradient(to right,rgb(255,255,255),rgb(255,255,255)",delay:0 })
.to(["#my-name","#my-image"],{opacity:0,translateX:200,delay:0})
.to(["#short-bio","#logos"],{opacity:0,translateX:-200,delay:0})
.to(first_sec, { opacity: 0 })

let scr_indicator = new ScrollMagic.Scene({
    triggerElement: "#sroll-ind",
    triggerHook: 0.8
}).setTween(tl_scroll).addTo(controller)

// Second Section
var second_sec = document.getElementById("2nd")

var sec_tl = gsap.timeline()
var sec_entry = gsap.timeline()
sec_entry.fromTo("#first-line", { opacity: 0, translateY:100 }, { opacity: 1, translateY:0 })
.fromTo("#my-work", { opacity: 0, translateY:100 }, { opacity: 1, translateY:0 });

sec_tl
.to("#my-work span", { opacity: 0, display: "none",delay:3 })
.to(["#first-line","#my-work"], { translateY: -200 })
.to("#my-work",{rotation:90,ease: Power4.easeInOut, delay:1})
.to("#rotate-text", { rotation: 90,ease: Power4.easeInOut })
.fromTo(".big-my-work", {opacity:0,translateY:200},{ opacity: 1,translateY:0, delay:1 })
  

let sec_section_entry = new ScrollMagic.Scene({
    triggerElement: "#first-line",
    triggerHook: 0.9
}).setTween(sec_entry).addTo(controller)

let sec_section_scoll = new ScrollMagic.Scene({
  triggerElement: "#first-line",
  triggerHook: 0.6
}).setTween(sec_tl).addTo(controller).addIndicators()





