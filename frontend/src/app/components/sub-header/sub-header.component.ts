import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [],
  template: `
    <div class="sub-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-sm-8">
            <div class="left-content">
              <p>Suivez nous sur notre <em>Page</em> et <em>Reseaux Sociaux</em></p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-4">
            <div class="right-icons">
              <ul>
                <li><a href=""><i class="fa fa-facebook"></i></a></li>
                <li><a href=""><i class="fa fa-twitter"></i></a></li>
                <li><a href=""><i class="fa fa-instagram"></i></a></li>
                <li><a href=""><i class="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class SubHeaderComponent {

}
