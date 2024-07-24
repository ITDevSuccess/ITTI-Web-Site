import { Component } from '@angular/core';
import { HeaderPageComponent } from "./components/header-page.component";
import { MetingPageComponent } from "./components/meting-page.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [HeaderPageComponent, MetingPageComponent, RouterOutlet],
  template: `
   <app-header-page/>
   <router-outlet/>
  `,
  styles: ``,
})
export class FormationComponent {}
