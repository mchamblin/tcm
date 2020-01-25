import { Component } from '@angular/core';

@Component({
  selector: 'tcm-root',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <img [routerLink]="['/']" src="assets/images/tcm-logo.png" alt="TCM logo" style="height: 50px; cursor:pointer;">
      <div class="navbar-collapse">
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
