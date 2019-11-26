import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import {
  DashboardComponent,
  HeroesComponent,
  HeroDetailComponent,
  MessagesComponent,
} from './components';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryDb } from './mock/in-memory-db.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDb, {
      dataEncapsulation: false,
      delay: 100
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
