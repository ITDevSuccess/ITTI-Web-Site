import { Component } from '@angular/core';
import { ItemsCarouselComponent } from './partials/items-carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-service',
  standalone: true,
  imports: [ItemsCarouselComponent, CommonModule],
  template: `
    <section class="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="owl-service-item owl-carousel" ngSkipHydration>
              <app-items-carousel
                *ngFor="let item of items"
                [title]="item.title"
                [content]="item.content"
                [imageSrc]="item.imageSrc"
              >
              </app-items-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class MainServiceComponent {
  items = [
    {
      title: 'Best Education',
      content:
        'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.',
      imageSrc: 'assets/images/service-icon-01.png',
    },
    {
      title: 'Best Teachers',
      content:
        'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.',
      imageSrc: 'assets/images/service-icon-02.png',
    },
    {
      title: 'Best Students',
      content:
        'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.',
      imageSrc: 'assets/images/service-icon-03.png',
    },
    {
      title: 'Online Meeting',
      content:
        'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.',
      imageSrc: 'assets/images/service-icon-02.png',
    },
    {
      title: 'Best Networking',
      content:
        'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.',
      imageSrc: 'assets/images/service-icon-03.png',
    },
  ];
}
