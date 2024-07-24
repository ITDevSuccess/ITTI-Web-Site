import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-area',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <a routerLink="" class="logo">ITTI</a>
              <ul class="nav">
                <li class="scroll-to-section">
                  <a routerLink="#top" routerLinkActive="active">Accueil</a>
                </li>
                <li>
                  <a href="#top" class="active">Formations</a>
                </li>
                <li class="scroll-to-section">
                  <a routerLink="#contact" routerLinkActive="active"
                    >Contactez-nous</a
                  >
                </li>
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderAreaComponent {}
