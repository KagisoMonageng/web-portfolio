import { Component, Directive, HostListener } from '@angular/core';

@Component({
  selector: 'app-xp-tabs',
  templateUrl: './xp-tabs.component.html',
  styleUrls: ['./xp-tabs.component.scss']
})

export class XpTabsComponent {

  selectedTab = 2;

  selectTab(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }
  
}


