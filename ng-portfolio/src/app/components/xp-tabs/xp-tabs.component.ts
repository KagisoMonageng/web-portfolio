import { Component, Directive, HostListener, OnInit } from '@angular/core';
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
  selector: 'app-xp-tabs',
  templateUrl: './xp-tabs.component.html',
  styleUrls: ['./xp-tabs.component.scss']
})

export class XpTabsComponent implements OnInit {


  selectedTab = 2;


  ngOnInit(): void {

    const mainContents = document.querySelectorAll('.tab-mainContent');

    gsap.fromTo(mainContents,{translateY:100,opacity:0},{translateY:0,opacity:1, stagger:0.1,scrollTrigger:{
      trigger:mainContents,
      start:"top 60%",
    }, onComplete: ()=>{
      setTimeout(() => {
        gsap.to(".intro-img",{translateY:0,skewY:0})
      }, 200);
    }})

    
   
  }



  selectTab(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }



}


