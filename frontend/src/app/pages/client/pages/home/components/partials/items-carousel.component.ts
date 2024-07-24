import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-carousel',
  standalone: true,
  template: `
    <div class="item">
      <div class="icon">
        <img [src]="imageSrc" alt="" />
      </div>
      <div class="down-content">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class ItemsCarouselComponent {
  @Input() imageSrc = '';
  @Input() title = '';
  @Input() content = '';
}
