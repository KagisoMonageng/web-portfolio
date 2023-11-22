import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { XpTabsComponent } from './components/xp-tabs/xp-tabs.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SkillSetComponent } from './components/skill-set/skill-set.component'
import { HighchartsChartModule } from 'highcharts-angular';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    XpTabsComponent,
    SkillSetComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotToastModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
