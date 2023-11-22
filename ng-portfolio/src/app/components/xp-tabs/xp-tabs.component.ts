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

   

    

    
   
  }



  selectTab(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }



}


