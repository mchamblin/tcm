import { Component } from '@angular/core';

@Component({
  selector: 'tcm-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="assets/images/tcm-logo.png" alt="TCM logo" style="height: 50px">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/title']">MOVIES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/person']">PEOPLE</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" aria-label="Search">
        </form>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'tcm.com';
}
