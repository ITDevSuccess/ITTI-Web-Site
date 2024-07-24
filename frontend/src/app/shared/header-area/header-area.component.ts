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
                  <a routerLink="/client" routerLinkActive="active">Accueil</a>
                </li>
                <li>
                  <a routerLink="/formation" routerLinkActive="active">Formations</a>
                </li>
                <li class="scroll-to-section">
                  <a href="#contact"
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
