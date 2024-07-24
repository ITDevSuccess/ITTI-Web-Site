import { Component } from '@angular/core';
import { MainBannerComponent } from "./components/main-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainBannerComponent],
  template: `
    <app-main-banner/>
  `,
  styles: ``,
})
export class HomeComponent {}
