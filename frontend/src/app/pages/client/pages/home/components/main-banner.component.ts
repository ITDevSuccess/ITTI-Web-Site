import { Component } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [],
  template: `
    <section class="section main-banner" id="top" data-section="section1">
      <video autoplay muted loop id="bg-video">
        <source src="assets/images/itti-presentation.mp4" type="video/mp4" />
      </video>
    </section>
  `,
  styles: ``,
})
export class MainBannerComponent {}
