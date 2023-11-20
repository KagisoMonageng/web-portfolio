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


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,SlowMo);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  ngOnInit(): void {
   
    gsap.fromTo(".intro-img",{opacity:0, translateY:20},{translateY:0,opacity:1,duration:1 ,stagger:0.3})
    gsap.fromTo(".intro-img",{skewY:0, translateY:0},{ translateY:-10,skewY:5, ease:"power1.inOut",scrollTrigger:{
      trigger:".intro-img",
      start:"top 60%",
      end:"bottom 60%",
      scrub:true,
      
    }, onComplete: ()=>{
      setTimeout(() => {
        gsap.to(".intro-img",{translateY:0 ,skewY:0})
      }, 200);
    }})
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    
  }
  
}
