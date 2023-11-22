import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import * as Highcharts from 'highcharts';

gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, SlowMo);

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {


  ngOnInit(): void {

    let tl_text = gsap.timeline({
      scrollTrigger: {
        trigger: '#skills-sect',
        start: 'top 70%',
        scrub: true
      }
    }).fromTo('.glow-text',{scale:1,translateY:-200},{scale:2.5,translateY:0,ease:"Power2.inOut",duration:4})

  

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#skills-sect',
        start: 'top 0%',
        pin: true,
        scrub: true
      },
      onStart:()=>{
        gsap.to('#nav-id',{color:"#fff"})
      },onReverseComplete:()=>{
        gsap.to('#nav-id',{color:"#232325"})
      }
    })

    tl.to('.glow-text',{opacity:0,ease:"Power2.inOut",duration:2})
    .fromTo('.col-text p',{opacity:0}, {
      opacity:1, duration:3, stagger: 1, onComplete: () => {
        let text_tl = gsap.timeline().to('span.ng', { fontWeight: 500, })
          .to('span.vue', { fontWeight: 500, stagger: 1 })
          .to('span.wp', { fontWeight: 500, stagger: 1 })
          .to('span.html', { fontWeight: 500, stagger: 1 })
          .to('span.css', { fontWeight: 500, })
      }
    })
      .fromTo('#code-1', { rotateX: -45, rotateY: -45, opacity: 0 }, {
        rotateX: 0, rotateY: 0, rotateZ: 0, opacity: 1, duration: 5, onStart: () => {
          gsap.fromTo('.install-text', { text: '' }, { text: 'Installing ...', duration: 3 })
        }
      })
      .to('#code-1', { translateY: -500, duration: 4 })
      .fromTo('#code-2', { opacity: 0, rotateX: -45, rotateY: -45 }, {
        rotateX: 0, rotateY: 0, rotateZ: 0, opacity: 1, duration: 5, onStart: () => {
          gsap.fromTo('.install-text2', { text: '' }, { text: 'Creating app ...', duration: 3 })
        }
      })
      .to('#code-2', { translateY: -500, duration: 4 })
      .fromTo('.skills-img', { opacity: 0, rotate: 0 }, { opacity: 1, rotate: 30, duration: 5, stagger: 3 })
      .fromTo('.creative', { opacity: 0 }, {
        opacity: 1, duration: 3, onComplete: () => {
          gsap.to('.creative', {
            css: {
              filter: 'drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.8))',
            },
          })
        }
      })



  }

  /**
 * In the chart render event, add icons on top of the circular shapes
 */




}
