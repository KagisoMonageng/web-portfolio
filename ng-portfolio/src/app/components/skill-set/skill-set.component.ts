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
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  ngOnInit(): void {



    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#skills-sect',
        start: 'top 0%',
        pin: true,
        scrub: true
      }
    })

    tl.fromTo('.col-text p', { opacity: 0 }, {
      opacity: 1, stagger: 1, onComplete: () => {
        let text_tl = gsap.timeline().to('span.ng',{color:"red"})
        .to('span.vue',{color:"green",stagger:1})
        .to('span.wp',{fontWeight:500,stagger:1})
        .to('span.html',{color:"blue",stagger:1})
        .to('span.css',{color:"orange"})
      }
    })
      .fromTo('#code-1', { rotateX: -45, rotateY: -45, opacity: 0 }, {
        rotateX: 0, rotateY: 0, rotateZ: 0, opacity: 1, duration: 3, onStart: () => {
          gsap.fromTo('.install-text', { text: '' }, { text: 'Installing ...', duration: 3 })
        }
      })
      .to('#code-1', { translateY: -500, duration: 2 })
      .fromTo('#code-2', { opacity: 0, rotateX: -45, rotateY: -45 }, {
        rotateX: 0, rotateY: 0, rotateZ: 0, opacity: 1, duration: 3, onStart: () => {
          gsap.fromTo('.install-text2', { text: '' }, { text: 'Creating app ...', duration: 3 })
        }
      })
      .to('#code-2', { translateY: -500, duration: 2 })
      .to('#progg',{opacity:1})


    
  }

  /**
 * In the chart render event, add icons on top of the circular shapes
 */
 



}
