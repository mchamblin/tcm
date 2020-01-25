import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ExtraOptions,
} from '@angular/router';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { PersonListComponent } from 'src/app/person-list/person-list.component';
import { PersonComponent } from 'src/app/person/person.component';
import { TitleListComponent } from 'src/app/title-list/title-list.component';
import { TitleComponent } from 'src/app/title/title.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'person', component: PersonListComponent },
  { path: 'person/:id1/:id2', component: PersonComponent },
  { path: 'title', component: TitleListComponent },
  { path: 'title/:id', component: TitleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
