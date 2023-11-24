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


gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin, SlowMo);


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {

    gsap.fromTo('.des-phil',{translateY:50,opacity:0},{translateY:0,opacity:1,stagger:0.5,scrollTrigger:{
      trigger: '.des-phil',
      start:'top 70%',
     }})

   gsap.fromTo('.proj-img',{translateY:50,opacity:0},{translateY:0,opacity:1,stagger:0.5,
    scrollTrigger:{
    trigger: '.proj-img',
    start:'top 70%',
   }})
  }
}
