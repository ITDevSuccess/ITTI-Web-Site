import { Component } from '@angular/core';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [],
  template: `
    <section class="heading-page header-text" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h6>Here are our upcoming meetings</h6>
            <h2>Upcoming Meetings</h2>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HeaderPageComponent {}
