import { Component, HostListener, OnInit } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  ngOnInit(): void {
    const mainContents = document.querySelectorAll('.tab-mainContent');

    gsap.fromTo(mainContents, { translateY: 300, opacity: 0 }, {
      translateY: 0, opacity: 1, stagger: 0, scrollTrigger: {
        trigger: mainContents,
        start: "top 100%",
        
      }
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {

  }


}
