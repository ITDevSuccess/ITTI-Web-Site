import { Component } from '@angular/core';
import { MainBannerComponent } from "./components/main-banner.component";
import { MainServiceComponent } from "./components/main-service.component";
import { MainMetingsComponent } from "./components/main-metings.component";
import { MainApplyComponent } from "./components/main-apply.component";
import { MainCourseComponent } from "./components/main-course.component";
import { MainFactsComponent } from "./components/main-facts.component";
import { MainContactComponent } from "./components/main-contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainBannerComponent, MainServiceComponent, MainMetingsComponent, MainApplyComponent, MainCourseComponent, MainFactsComponent, MainContactComponent],
  template: `
    <app-main-banner />
    <app-main-service />
    <app-main-metings />
    <app-main-apply/>
    <app-main-course/>
    <app-main-facts/>
    <app-main-contact/>
  `,
  styles: ``,
})
export class HomeComponent {}
