import { Component } from '@angular/core';
import { MetingPageComponent } from "./components/meting-page.component";

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [MetingPageComponent],
  template: ` <app-meting-page /> `,
  styles: ``,
})
export class ListsComponent {}
