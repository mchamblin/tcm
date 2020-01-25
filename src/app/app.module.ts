import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonComponent } from 'src/app/person/person.component';
import { TitleListComponent } from 'src/app/title-list/title-list.component';
import { TitleComponent } from 'src/app/title/title.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';

@NgModule({
  declarations: [AppComponent, PersonComponent, PersonListComponent, TitleComponent, TitleListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
