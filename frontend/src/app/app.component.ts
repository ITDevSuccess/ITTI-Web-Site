import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from "./shared/sub-header/sub-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
