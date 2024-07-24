import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAreaComponent } from '../../shared/header-area/header-area.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterOutlet, HeaderAreaComponent],
  template: `
  <app-header-area />
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class ClientComponent {}
